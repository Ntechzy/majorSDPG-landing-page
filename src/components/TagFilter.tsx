import type { WPTag } from "@/types/blog";

interface TagFilterProps {
  tags: WPTag[];
  selectedTagId: number | null;
  onChange: (tagId: number | null) => void;
  isLoading: boolean;
}

function TagChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  if (active) {
    return (
      <div className="grad-bg rounded-full p-px">
        <button
          type="button"
          onClick={onClick}
          className="rounded-full bg-[#050505] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
        >
          {label}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[#adb5bd]/20 bg-transparent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#adb5bd] transition-colors hover:border-[#adb5bd]/40 hover:text-white"
    >
      {label}
    </button>
  );
}

export default function TagFilter({
  tags,
  selectedTagId,
  onChange,
  isLoading,
}: TagFilterProps) {
  return (
    <div className="flex min-h-10 items-center gap-3 overflow-x-auto pb-1">
      <TagChip active={selectedTagId === null} label="All" onClick={() => onChange(null)} />

      {isLoading && tags.length === 0 ? (
        <span className="text-xs uppercase tracking-widest text-[#adb5bd]">Loading tags...</span>
      ) : (
        tags.map((tag) => (
          <TagChip
            key={tag.id}
            active={selectedTagId === tag.id}
            label={tag.name}
            onClick={() => onChange(tag.id)}
          />
        ))
      )}
    </div>
  );
}
