import { useState, useEffect } from "react";
import { words } from "../data/data";

export default function TypingText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(75);
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(wordIndex + 1);
          setTypingSpeed(150);
        }
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  return <h2 className="typing-text">{text}</h2>;
}
