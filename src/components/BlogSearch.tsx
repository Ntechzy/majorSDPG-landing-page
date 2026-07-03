import { useEffect, useState } from "react";
import { Search } from "lucide-react";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      onChange(localValue.trim());
    }, 400);

    return () => window.clearTimeout(timeoutId);
  }, [localValue, onChange]);

  return (
    <label className="relative block w-full max-w-md">
      <Search
        size={16}
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-gold-dark"
      />
      <input
        type="search"
        value={localValue}
        onChange={(event) => setLocalValue(event.target.value)}
        placeholder="Search articles, topics, and updates"
        className="w-full rounded-xl border border-gold/20 bg-white px-4 py-3 pl-11 text-sm font-medium text-charcoal outline-none transition-colors placeholder:text-charcoal/45 focus:border-gold/60 focus:ring-4 focus:ring-gold/10"
      />
    </label>
  );
}
