import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { fetchWpPosts } from "@/lib/api";
import { getCategories } from "@/lib/wpHelpers";
import type { AsyncStatus, WPPost } from "@/types/blog";

interface RelatedPostsProps {
  post: WPPost;
}

export default function RelatedPosts({ post }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<WPPost[]>([]);
  const [status, setStatus] = useState<AsyncStatus>("idle");
  const primaryCategoryId = getCategories(post)[0]?.id;

  useEffect(() => {
    let active = true;

    async function loadRelatedPosts() {
      if (!primaryCategoryId) {
        setRelatedPosts([]);
        return;
      }

      setStatus("loading");

      try {
        const response = await fetchWpPosts({
          categories: primaryCategoryId,
          perPage: 4,
          exclude: [post.id],
        });

        if (!active) {
          return;
        }

        setRelatedPosts(response.posts.slice(0, 3));
        setStatus("succeeded");
      } catch {
        if (!active) {
          return;
        }

        setStatus("failed");
      }
    }

    void loadRelatedPosts();

    return () => {
      active = false;
    };
  }, [post.id, primaryCategoryId]);

  if (!primaryCategoryId) {
    return null;
  }

  return (
    <section className="mx-auto mt-24 max-w-6xl border-t border-[#adb5bd]/10 px-6 pt-16 md:px-12">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="grad-bg h-px w-8" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#adb5bd]">
              Continue Reading
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tighter text-white md:text-5xl">
            Related <span className="grad-text font-serif italic">Articles</span>
          </h2>
        </div>
      </div>

      {status === "loading" ? (
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="h-[450px] animate-pulse rounded-xl bg-zinc-900" />
          ))}
        </div>
      ) : null}

      {status === "succeeded" && relatedPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.id} post={relatedPost} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
