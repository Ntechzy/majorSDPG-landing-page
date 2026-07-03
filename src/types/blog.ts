export interface WPTag {
  id: number;
  name: string;
  slug: string;
  count?: number;
  taxonomy?: string;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
  taxonomy?: string;
}

export interface WPAuthor {
  id: number;
  name: string;
  slug?: string;
  url?: string;
  description?: string;
  avatar_urls?: Record<string, string>;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

export interface WPPostEmbedded {
  author?: WPAuthor[];
  "wp:featuredmedia"?: WPMedia[];
  "wp:term"?: Array<Array<WPCategory | WPTag>>;
}

export interface WPRenderedField {
  rendered: string;
  protected?: boolean;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link?: string;
  tags: number[];
  categories: number[];
  title: WPRenderedField;
  content: WPRenderedField;
  excerpt: WPRenderedField;
  _embedded?: WPPostEmbedded;
}

export type AsyncStatus = "idle" | "loading" | "succeeded" | "failed";

export interface BlogState {
  posts: WPPost[];
  selectedPost: WPPost | null;
  tags: WPTag[];
  status: AsyncStatus;
  detailStatus: AsyncStatus;
  tagsStatus: AsyncStatus;
  error: string | null;
  totalPages: number;
  totalPosts: number;
  currentPage: number;
  searchQuery: string;
  selectedTag: number | null;
}

export interface FetchPostsParams {
  page?: number;
  perPage?: number;
  search?: string;
  tags?: number | null;
  categories?: number | null;
  exclude?: number[];
}
