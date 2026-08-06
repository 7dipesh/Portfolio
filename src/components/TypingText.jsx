import { useEffect, useMemo, useState } from "react";

function TypingText({
  words = ["Frontend Developer"],
  typingSpeed = 110,
  deletingSpeed = 70,
  pause = 1200,
}) {
  const safeWords = useMemo(() => {
    if (!Array.isArray(words) || words.length === 0) {
      return ["Frontend Developer"];
    }
    return words;
  }, [words]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[index % safeWords.length];
    let timeoutId;

    if (!isDeleting && text.length < current.length) {
      timeoutId = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length > 0) {
      timeoutId = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % safeWords.length);
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, index, safeWords, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
      {text}
      <span className="ml-1 animate-pulse text-purple-400">|</span>
    </span>
  );
}

export default TypingText;