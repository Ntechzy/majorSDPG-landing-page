import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { decodeHTML, formatDate, getCategories, getFeaturedImage, getTags } from "@/lib/wpHelpers";
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
      className="group relative block h-[450px] overflow-hidden rounded-xl border border-[#adb5bd]/10 bg-black transition-all duration-500 hover:border-[#adb5bd]/40"
    >
      <img
        src={imageSrc}
        alt={altText}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-70"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded bg-white px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-black">
            {primaryTag}
          </span>

          <div className="flex items-center gap-2 text-[10px] font-bold text-[#adb5bd]">
            <Calendar size={12} />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-fit border-b border-white/10 pb-2">
            <span className="grad-text font-serif text-lg tracking-tight">{primaryCategory}</span>
          </div>

          <h3 className="text-xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-[#adb5bd] md:text-[1.3rem]">
            {decodeHTML(post.title.rendered)}
          </h3>

          <div className="flex -translate-y-2 items-center gap-2 pt-2 text-[10px] font-bold uppercase tracking-widest text-[#adb5bd] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Read Blog <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </Link>
  );
}
