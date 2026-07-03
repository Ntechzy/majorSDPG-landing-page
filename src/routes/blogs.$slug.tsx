import { createFileRoute } from "@tanstack/react-router";
import BlogDetail from "@/pages/BlogDetail";

export const Route = createFileRoute("/blogs/$slug")({
  head: () => ({
    meta: [
      { title: "Blog Article | Major S.D. Singh PG Ayurvedic Medical College" },
      {
        name: "description",
        content:
          "Read the latest article from the Major S.D. Singh PG Ayurvedic Medical College editorial archive.",
      },
    ],
  }),
  component: BlogDetail,
});
