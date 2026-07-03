import { createFileRoute } from "@tanstack/react-router";
import AllBlogs from "@/pages/AllBlogs";

interface BlogArchiveSearch {
  page?: number;
  q?: string;
  tag?: string;
}

export const Route = createFileRoute("/blogs/")({
  validateSearch: (search: Record<string, unknown>): BlogArchiveSearch => {
    const parsedPage = Number(search.page);

    return {
      page: Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : undefined,
      q: typeof search.q === "string" && search.q.trim() ? search.q : undefined,
      tag: typeof search.tag === "string" && search.tag.trim() ? search.tag : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Blogs | Major S.D. Singh PG Ayurvedic Medical College" },
      {
        name: "description",
        content:
          "Browse the Major S.D. Singh PG Ayurvedic Medical College editorial archive, campus updates, and Ayurvedic education insights.",
      },
    ],
  }),
  component: AllBlogs,
});
