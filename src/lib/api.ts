import axios from "axios";
import type { FetchPostsParams, WPPost, WPTag } from "@/types/blog";

const DEFAULT_POSTS_ENDPOINT = "https://blog.majorsdspgamc.in/wp-json/wp/v2/posts";

const envPostsEndpoint = import.meta.env.VITE_WP_POSTS_ENDPOINT?.trim();
const envApiBase = import.meta.env.VITE_WP_API_BASE?.trim();

const resolvedApiBase =
  envApiBase || envPostsEndpoint?.replace(/\/posts\/?$/, "") || DEFAULT_POSTS_ENDPOINT.replace(/\/posts\/?$/, "");

export const wpApi = axios.create({
  baseURL: resolvedApiBase,
  params: {
    _embed: true,
  },
});

export interface FetchPostsResponse {
  posts: WPPost[];
  totalPages: number;
  totalPosts: number;
  currentPage: number;
}

export async function fetchWpPosts(params: FetchPostsParams = {}): Promise<FetchPostsResponse> {
  const currentPage = params.page ?? 1;
  const response = await wpApi.get<WPPost[]>("/posts", {
    params: {
      page: currentPage,
      per_page: params.perPage ?? 9,
      search: params.search || undefined,
      tags: params.tags ?? undefined,
      categories: params.categories ?? undefined,
      exclude: params.exclude?.length ? params.exclude.join(",") : undefined,
    },
  });

  return {
    posts: response.data,
    totalPages: Number(response.headers["x-wp-totalpages"] ?? 1),
    totalPosts: Number(response.headers["x-wp-total"] ?? response.data.length),
    currentPage,
  };
}

export async function fetchWpPostBySlug(slug: string): Promise<WPPost | null> {
  const response = await wpApi.get<WPPost[]>("/posts", {
    params: {
      slug,
      per_page: 1,
    },
  });

  return response.data[0] ?? null;
}

export async function fetchWpTags(): Promise<WPTag[]> {
  const response = await wpApi.get<WPTag[]>("/tags", {
    params: {
      per_page: 100,
      hide_empty: true,
      _fields: "id,name,slug,count",
    },
  });

  return response.data;
}
