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
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#adb5bd]"
      />
      <input
        type="search"
        value={localValue}
        onChange={(event) => setLocalValue(event.target.value)}
        placeholder="Search articles, topics, and updates"
        className="w-full rounded-xl border border-[#adb5bd]/20 bg-black px-4 py-3 pl-11 text-sm font-light text-white outline-none transition-colors placeholder:text-[#adb5bd] focus:border-[#adb5bd]/40"
      />
    </label>
  );
}
