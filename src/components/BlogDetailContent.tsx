import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  decodeHTML,
  getTags,
  slugifyHeading,
  stripHTML,
} from "@/lib/wpHelpers";
import type { WPPost } from "@/types/blog";

interface HeadingItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

interface BlogDetailContentProps {
  post: WPPost;
}

function ShareIconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gold/20 bg-cream text-gold-dark transition-all hover:border-gold/60 hover:bg-gold hover:text-charcoal-deep"
    >
      {children}
    </div>
  );
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const articleRef = useRef<HTMLElement | null>(null);
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const tags = getTags(post);

  const shareUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }

    return `https://majorsdspgamc.com/blogs/${post.slug}`;
  }, [post.slug]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const parser = new DOMParser();
    const documentFragment = parser.parseFromString(post.content.rendered, "text/html");
    const nextHeadings = Array.from(documentFragment.querySelectorAll("h2, h3")).map(
      (heading, index) => {
        const text = decodeHTML(stripHTML(heading.textContent || `Section ${index + 1}`));
        const baseId = slugifyHeading(text) || `section-${index + 1}`;

        return {
          id: `${baseId}-${index + 1}`,
          text,
          level: heading.tagName.toLowerCase() as "h2" | "h3",
        };
      }
    );

    setHeadings(nextHeadings);
  }, [post.content.rendered]);

  useEffect(() => {
    if (!articleRef.current || headings.length === 0) {
      return;
    }

    const headingElements = articleRef.current.querySelectorAll("h2, h3");
    headingElements.forEach((heading, index) => {
      const headingData = headings[index];
      if (headingData) {
        heading.id = headingData.id;
      }
    });
  }, [headings]);

  useEffect(() => {
    if (!articleRef.current || headings.length === 0) {
      return;
    }

    const headingElements = Array.from(articleRef.current.querySelectorAll("h2, h3"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);
        if (visibleHeading?.target.id) {
          setActiveHeadingId(visibleHeading.target.id);
        }
      },
      {
        rootMargin: "0px 0px -65% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  async function handleCopyLink() {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
      <article
        ref={articleRef}
        className="blog-prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      <aside className="mt-12 space-y-8 lg:mt-0 lg:sticky lg:top-8 lg:self-start">
        <div>
          <p className="mb-4 text-[10px] font-black uppercase text-charcoal/50">
            Share this article
          </p>
          <div className="flex flex-wrap gap-3">
            <WhatsappShareButton url={shareUrl} title={decodeHTML(post.title.rendered)}>
              <ShareIconButton>
                <MessageCircle size={16} />
              </ShareIconButton>
            </WhatsappShareButton>
            <FacebookShareButton url={shareUrl} hashtag="#MajorSDBlogs">
              <ShareIconButton>
                <Facebook size={16} />
              </ShareIconButton>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={decodeHTML(post.title.rendered)}>
              <ShareIconButton>
                <Twitter size={16} />
              </ShareIconButton>
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={decodeHTML(post.title.rendered)}>
              <ShareIconButton>
                <Linkedin size={16} />
              </ShareIconButton>
            </LinkedinShareButton>
            <EmailShareButton
              url={shareUrl}
              subject={decodeHTML(post.title.rendered)}
              body="Thought you might enjoy this article:"
            >
              <ShareIconButton>
                <Mail size={16} />
              </ShareIconButton>
            </EmailShareButton>
            <button type="button" onClick={handleCopyLink} className="relative">
              <ShareIconButton>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </ShareIconButton>
              {copied ? (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-gold/20 bg-charcoal px-2 py-1 text-[10px] font-bold uppercase text-white">
                  Copied!
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {tags.length > 0 ? (
          <div>
            <p className="mb-3 text-[10px] font-black uppercase text-charcoal/50">Tags</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  to="/blogs"
                  search={{ tag: tag.slug }}
                  className="rounded-full border border-gold/20 bg-cream px-3 py-1 text-[10px] font-black uppercase text-charcoal/60 transition-all hover:border-gold/60 hover:text-gold-dark"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {headings.length > 0 ? (
          <div>
            <p className="mb-3 text-[10px] font-black uppercase text-charcoal/50">
              In this article
            </p>
            <div className="space-y-2">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`block text-xs font-semibold transition-colors hover:text-gold-dark ${
                    activeHeadingId === heading.id ? "text-gold-dark" : "text-charcoal/55"
                  } ${heading.level === "h3" ? "pl-4" : ""}`}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
