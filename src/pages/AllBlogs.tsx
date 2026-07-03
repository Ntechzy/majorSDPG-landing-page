import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import TagFilter from "@/components/TagFilter";
import {
  clearFilters,
  fetchPosts,
  fetchTags,
  selectAllPosts,
  selectAllTags,
  selectBlogError,
  selectBlogStatus,
  selectCurrentPage,
  selectSearchQuery,
  selectSelectedTag,
  selectTagsStatus,
  selectTotalPages,
  selectTotalPosts,
  setCurrentPage,
  setSearchQuery,
  setSelectedTag,
} from "@/store/blogSlice";
import type { AppDispatch, RootState } from "@/store";

export default function AllBlogs() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const search = useSearch({ from: "/blogs/" });

  const posts = useSelector((state: RootState) => selectAllPosts(state));
  const tags = useSelector((state: RootState) => selectAllTags(state));
  const status = useSelector((state: RootState) => selectBlogStatus(state));
  const tagsStatus = useSelector((state: RootState) => selectTagsStatus(state));
  const totalPages = useSelector((state: RootState) => selectTotalPages(state));
  const totalPosts = useSelector((state: RootState) => selectTotalPosts(state));
  const currentPage = useSelector((state: RootState) => selectCurrentPage(state));
  const error = useSelector((state: RootState) => selectBlogError(state));
  const searchQuery = useSelector((state: RootState) => selectSearchQuery(state));
  const selectedTag = useSelector((state: RootState) => selectSelectedTag(state));

  const currentPageParam = search.page ?? 1;
  const currentQueryParam = search.q ?? "";
  const currentTagSlug = search.tag;

  const selectedTagIdFromSlug = useMemo(() => {
    if (!currentTagSlug) {
      return null;
    }

    const matchedTag = tags.find((tag) => tag.slug === currentTagSlug);
    return matchedTag?.id ?? null;
  }, [currentTagSlug, tags]);

  useEffect(() => {
    document.title = "Blog | Major SD Singh PG Ayurvedic Medical College";
  }, []);

  useEffect(() => {
    if (tagsStatus === "idle") {
      void dispatch(fetchTags());
    }
  }, [dispatch, tagsStatus]);

  useEffect(() => {
    dispatch(setSearchQuery(currentQueryParam));
    dispatch(setCurrentPage(currentPageParam));
  }, [currentPageParam, currentQueryParam, dispatch]);

  useEffect(() => {
    if (!currentTagSlug) {
      dispatch(setSelectedTag(null));
      dispatch(setCurrentPage(currentPageParam));
      return;
    }

    if (tags.length === 0) {
      return;
    }

    dispatch(setSelectedTag(selectedTagIdFromSlug));
    dispatch(setCurrentPage(currentPageParam));
  }, [currentPageParam, currentTagSlug, dispatch, selectedTagIdFromSlug, tags.length]);

  useEffect(() => {
    void dispatch(
      fetchPosts({
        page: currentPageParam,
        perPage: 9,
        search: currentQueryParam,
        tags: selectedTagIdFromSlug,
      })
    );
  }, [currentPageParam, currentQueryParam, dispatch, selectedTagIdFromSlug]);

  const updateSearch = useCallback(
    (nextValues: { page?: number; q?: string; tag?: string }) => {
      void navigate({
        to: "/blogs",
        search: {
          page: nextValues.page && nextValues.page > 1 ? nextValues.page : undefined,
          q: nextValues.q || undefined,
          tag: nextValues.tag || undefined,
        },
      });
    },
    [navigate]
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      if (value === currentQueryParam) {
        return;
      }

      updateSearch({
        q: value,
        tag: currentTagSlug,
      });
    },
    [currentQueryParam, currentTagSlug, updateSearch]
  );

  const handleTagChange = useCallback(
    (tagId: number | null) => {
      const matchedTag = tags.find((tag) => tag.id === tagId);
      updateSearch({
        q: currentQueryParam,
        tag: matchedTag?.slug,
      });
    },
    [currentQueryParam, tags, updateSearch]
  );

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
    updateSearch({});
  }, [dispatch, updateSearch]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) {
        return;
      }

      updateSearch({
        page,
        q: currentQueryParam,
        tag: currentTagSlug,
      });
    },
    [currentQueryParam, currentTagSlug, totalPages, updateSearch]
  );

  const isLoading = status === "loading";
  const showClearFilters = Boolean(searchQuery) || selectedTag !== null;

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Navbar />

      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 md:px-12 md:pt-40 lg:pt-48 lg:pb-24">
        <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(242,149,43,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,149,43,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-5xl text-center md:mb-20">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-sky" />
                <span className="text-xs font-semibold uppercase text-sky">
                  Campus News & Insights
                </span>
                <div className="h-px w-12 bg-sky" />
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-charcoal md:text-6xl lg:text-7xl">
                College Blogs and <span className="text-gold-dark">Ayurvedic Updates</span>
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-charcoal/55 md:text-lg">
                Explore institutional updates, Ayurvedic education insights, student life, and
                editorial stories from Major S.D. Singh PG Ayurvedic Medical College.
              </p>
              <div className="flex items-center justify-center gap-4 pt-2 text-gold">
                <span className="h-px w-16 bg-gold/35" />
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="h-px w-16 bg-gold/35" />
              </div>
              <div className="flex flex-col items-center gap-5 pt-4 sm:flex-row sm:justify-center">
                <div className="text-center">
                  <p className="text-4xl font-semibold text-charcoal">{totalPosts}</p>
                  <p className="text-[10px] font-semibold uppercase text-charcoal/45">
                    Published Articles
                  </p>
                </div>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase text-charcoal-deep shadow-md transition-colors hover:bg-gold-dark hover:text-white"
                >
                  <ArrowLeft size={14} />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-12 max-w-6xl rounded-2xl border border-gold/15 bg-white p-5 shadow-[0_16px_42px_rgba(13,13,26,0.06)] md:p-6">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
              <BlogSearch value={searchQuery} onChange={handleSearchChange} />

              {showClearFilters ? (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="w-fit text-xs font-semibold uppercase text-gold-dark underline transition-colors hover:text-charcoal"
                >
                  Clear filters
                </button>
              ) : null}
            </div>

            <TagFilter
              tags={tags}
              selectedTagId={selectedTag}
              onChange={handleTagChange}
              isLoading={tagsStatus === "loading"}
            />
          </div>

          {isLoading ? (
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} className="h-[430px] animate-pulse rounded-2xl bg-gold/10" />
              ))}
            </div>
          ) : null}

          {status === "failed" ? (
            <div className="mx-auto max-w-3xl py-20 text-center">
              <p className="font-semibold text-charcoal/65">{error || "Failed to load articles"}</p>
              <button
                type="button"
                onClick={() =>
                  void dispatch(
                    fetchPosts({
                      page: currentPage,
                      perPage: 9,
                      search: searchQuery,
                      tags: selectedTag,
                    })
                  )
                }
                className="mt-6 rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase text-charcoal-deep transition-colors hover:bg-gold-dark hover:text-white"
              >
                Retry
              </button>
            </div>
          ) : null}

          {status === "succeeded" && posts.length === 0 ? (
            <div className="mx-auto max-w-3xl py-20 text-center">
              <p className="text-xl font-semibold text-charcoal">No articles found</p>
              <p className="mt-2 text-charcoal/55">Try a different search or tag</p>
              {showClearFilters ? (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-5 text-xs font-semibold uppercase text-gold-dark underline transition-colors hover:text-charcoal"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          ) : null}

          {status === "succeeded" && posts.length > 0 ? (
            <>
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 ? (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              ) : null}
            </>
          ) : null}

          <div className="mt-24 text-center">
            <div className="mx-auto mb-6 h-px w-24 bg-gold/25" />
            <p className="text-[10px] font-semibold uppercase text-charcoal/40">
              End of Archive
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
