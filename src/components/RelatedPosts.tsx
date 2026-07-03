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
    <section className="mx-auto mt-20 max-w-6xl border-t border-gold/15 px-0 pt-14">
      <div className="mb-10 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-sky" />
            <span className="text-xs font-black uppercase text-sky">
              Continue Reading
            </span>
            <div className="h-px w-10 bg-sky" />
          </div>
          <h2 className="text-4xl font-black text-charcoal md:text-5xl">
            Related <span className="text-gold-dark">Articles</span>
          </h2>
        </div>
      </div>

      {status === "loading" ? (
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="h-[420px] animate-pulse rounded-2xl bg-gold/10" />
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
