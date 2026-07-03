import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock3, UserRound } from "lucide-react";
import BlogDetailContent from "@/components/BlogDetailContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RelatedPosts from "@/components/RelatedPosts";
import {
  fetchPostBySlug,
  resetSelectedPost,
  selectBlogError,
  selectDetailStatus,
  selectSelectedPost,
} from "@/store/blogSlice";
import type { AppDispatch, RootState } from "@/store";
import {
  decodeHTML,
  formatDate,
  getAuthorName,
  getCategories,
  getFeaturedImage,
  getReadTime,
} from "@/lib/wpHelpers";

export default function BlogDetail() {
  const { slug } = useParams({ from: "/blogs/$slug" });
  const dispatch = useDispatch<AppDispatch>();
  const post = useSelector((state: RootState) => selectSelectedPost(state));
  const status = useSelector((state: RootState) => selectDetailStatus(state));
  const error = useSelector((state: RootState) => selectBlogError(state));

  useEffect(() => {
    void dispatch(fetchPostBySlug(slug));

    return () => {
      dispatch(resetSelectedPost());
    };
  }, [dispatch, slug]);

  useEffect(() => {
    if (post) {
      document.title = `${decodeHTML(post.title.rendered)} | Major SD Blog`;
      return;
    }

    document.title = "Blog | Major SD Singh PG Ayurvedic Medical College";
  }, [post]);

  if (status === "loading" || (status === "idle" && !post)) {
    return (
      <main className="min-h-screen bg-cream text-charcoal">
        <Navbar />
        <div className="h-px w-full bg-linear-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:pt-48">
          <div className="h-[60vh] min-h-[400px] animate-pulse rounded-2xl bg-gold/10" />
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} className="h-4 animate-pulse rounded bg-gold/10" />
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-24 animate-pulse rounded-2xl bg-gold/10" />
              <div className="h-24 animate-pulse rounded-2xl bg-gold/10" />
              <div className="h-36 animate-pulse rounded-2xl bg-gold/10" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (status === "failed" || !post) {
    return (
      <main className="min-h-screen bg-cream text-charcoal">
        <Navbar />
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-12 text-center md:pt-40 lg:pt-48">
          <p className="text-3xl font-black">Article not found</p>
          <p className="mt-3 text-charcoal/60">{error || "This article is no longer available."}</p>
          <Link to="/blogs" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-black uppercase text-charcoal-deep transition-colors hover:bg-gold-dark hover:text-white">
              <ArrowLeft size={14} />
              Back to Blogs
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const decodedTitle = decodeHTML(post.title.rendered);
  const categoryName = getCategories(post)[0]?.name || "Blog";
  const heroImage = getFeaturedImage(post);

  return (
    <main className="min-h-screen bg-cream font-sans text-charcoal">
      <Navbar />
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 md:px-12 md:pt-40 lg:pt-48">
        <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(242,149,43,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,149,43,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-5xl px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[10px] font-black uppercase text-charcoal/45">
              <Link to="/" className="transition-colors hover:text-gold-dark">
                Home
              </Link>
              <span>/</span>
              <Link to="/blogs" className="transition-colors hover:text-gold-dark">
                Blog
              </Link>
              <span>/</span>
              <span className="text-charcoal/75">{decodedTitle}</span>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-gold/15 bg-charcoal-deep shadow-[0_24px_60px_rgba(13,13,26,0.16)]">
              <img
                src={heroImage}
                alt={decodedTitle}
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep via-charcoal-deep/35 to-transparent" />

              <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-5xl px-6 pb-12 md:px-12">
                <div className="inline-flex rounded-full bg-gold px-4 py-2 text-[10px] font-black uppercase text-charcoal-deep">
                    {categoryName}
                </div>

                <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                  {decodedTitle}
                </h1>

                <div className="mt-5 flex flex-wrap gap-5 text-xs font-bold uppercase text-cream/80">
                  <div className="flex items-center gap-2">
                    <UserRound size={14} />
                    <span>{getAuthorName(post)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    <span>{getReadTime(post.content.rendered)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gold/15 bg-white shadow-[0_18px_45px_rgba(13,13,26,0.08)]">
            <BlogDetailContent post={post} />
          </div>

          <RelatedPosts post={post} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
