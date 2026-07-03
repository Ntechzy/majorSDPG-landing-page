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
      <main className="min-h-screen bg-charcoal-deep text-white">
        <Navbar />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:pt-48">
          <div className="h-[60vh] min-h-[400px] animate-pulse rounded-[28px] bg-zinc-900" />
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} className="h-4 animate-pulse rounded bg-zinc-900" />
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-24 animate-pulse rounded-2xl bg-zinc-900" />
              <div className="h-24 animate-pulse rounded-2xl bg-zinc-900" />
              <div className="h-36 animate-pulse rounded-2xl bg-zinc-900" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (status === "failed" || !post) {
    return (
      <main className="min-h-screen bg-charcoal-deep text-white">
        <Navbar />
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-12 text-center md:pt-40 lg:pt-48">
          <p className="text-3xl font-light tracking-tight">Article not found</p>
          <p className="mt-3 text-[#adb5bd]">{error || "This article is no longer available."}</p>
          <Link to="/blogs" className="grad-bg mt-8 rounded-full p-px">
            <span className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold uppercase tracking-widest text-white">
              <ArrowLeft size={14} />
              Back to Blogs
            </span>
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
    <main className="min-h-screen bg-charcoal-deep font-sans text-white">
      <Navbar />
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 md:px-12 md:pt-40 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(242,149,43,0.12),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.05),transparent_24%)]" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-5xl rounded-[24px] border border-gold/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[10px] uppercase tracking-widest text-[#adb5bd]">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link to="/blogs" className="transition-colors hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/80">{decodedTitle}</span>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative min-h-[400px] overflow-hidden rounded-[28px] border border-gold/10 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
              <img
                src={heroImage}
                alt={decodedTitle}
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-5xl px-6 pb-12 md:px-12">
                <div className="grad-bg inline-flex rounded-full p-px">
                  <span className="rounded-full bg-black px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#adb5bd]">
                    {categoryName}
                  </span>
                </div>

                <h1 className="mt-4 text-4xl font-light leading-tight tracking-tighter text-white md:text-6xl">
                  {decodedTitle}
                </h1>

                <div className="mt-4 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-[#adb5bd]">
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

          <div className="mx-auto mt-10 max-w-6xl rounded-[32px] border border-gold/10 bg-black/25 backdrop-blur-sm">
            <BlogDetailContent post={post} />
          </div>

          <RelatedPosts post={post} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
