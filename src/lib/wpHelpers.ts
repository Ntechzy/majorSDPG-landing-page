import he from "he";
import { format, parseISO } from "date-fns";
import type { WPCategory, WPPost, WPTag } from "@/types/blog";

const FALLBACK_IMAGE = "/thumnail.webp";

export function decodeHTML(str: string): string {
  return he.decode(str);
}

export function stripHTML(str: string): string {
  return str.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), "dd MMM yyyy");
  } catch {
    return dateStr;
  }
}

export function getFeaturedImage(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE;
}

export function getExcerpt(post: WPPost, length = 150): string {
  const plainText = stripHTML(post.excerpt.rendered || post.content.rendered);
  if (plainText.length <= length) {
    return plainText;
  }

  return `${plainText.slice(0, length).trimEnd()}...`;
}

export function getReadTime(content: string): string {
  const wordCount = stripHTML(content)
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function getCategories(post: WPPost): WPCategory[] {
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];
  return categories.filter((term): term is WPCategory => typeof term.name === "string");
}

export function getTags(post: WPPost): WPTag[] {
  const tags = post._embedded?.["wp:term"]?.[1] ?? [];
  return tags.filter((term): term is WPTag => typeof term.name === "string");
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || "Major SD Editorial Team";
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
