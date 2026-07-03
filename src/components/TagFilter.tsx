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
      <button
        type="button"
        onClick={onClick}
        className="rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase text-charcoal-deep shadow-sm"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-semibold uppercase text-charcoal/65 transition-colors hover:border-gold/50 hover:text-gold-dark"
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
        <span className="text-xs font-medium uppercase text-charcoal/50">Loading tags...</span>
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
