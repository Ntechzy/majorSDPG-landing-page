import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import {
  decodeHTML,
  formatDate,
  getCategories,
  getExcerpt,
  getFeaturedImage,
  getTags,
} from "@/lib/wpHelpers";
import type { WPPost } from "@/types/blog";

const FALLBACK_IMAGE = "/thumnail.webp";

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [imageSrc, setImageSrc] = useState(() => getFeaturedImage(post));
  const primaryTag = getTags(post)[0]?.name || "General";
  const primaryCategory = getCategories(post)[0]?.name || "Blog";
  const altText =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || decodeHTML(post.title.rendered);

  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: post.slug }}
      className="group block overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-[0_18px_45px_rgba(13,13,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_24px_60px_rgba(13,13,26,0.14)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          onError={() => setImageSrc(FALLBACK_IMAGE)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep/45 via-charcoal-deep/10 to-transparent" />

        <div className="absolute top-4 left-4 rounded-full bg-gold px-4 py-2 text-[10px] font-semibold uppercase text-charcoal-deep shadow-lg">
            {primaryTag}
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[10px] font-medium text-charcoal shadow-lg">
            <Calendar size={12} />
            <span>{formatDate(post.date)}</span>
        </div>

        <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gold shadow-[0_10px_24px_rgba(13,13,26,0.16)] ring-1 ring-gold/15">
          <BookOpen size={21} />
        </div>
      </div>

      <div className="space-y-4 px-6 pt-10 pb-6">
        <div className="text-[10px] font-semibold uppercase text-gold-dark">
          {primaryCategory}
        </div>

        <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-charcoal transition-colors duration-300 group-hover:text-gold-dark">
          {decodeHTML(post.title.rendered)}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-charcoal/60">
          {getExcerpt(post, 130)}
        </p>

        <div className="flex items-center gap-2 pt-1 text-[11px] font-semibold uppercase text-gold-dark">
          Read Blog <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
