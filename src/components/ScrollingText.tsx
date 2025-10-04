interface ScrollingTextProps {
  text: string;
  className?: string;
}

export function ScrollingText({ text, className = "" }: ScrollingTextProps) {
  // Duplicate text multiple times for seamless scrolling
  const repeatedText = Array(20).fill(text).join(" • ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-scroll">
        <span className="inline-block px-4">{repeatedText}</span>
        <span className="inline-block px-4">{repeatedText}</span>
      </div>
    </div>
  );
}
