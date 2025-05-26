import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypewriterEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 1500,
  className = '',
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const currentWordRef = useRef(words[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    currentWordRef.current = words[wordIndex];
    const word = currentWordRef.current;
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayText.length === word.length) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, isWaiting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={`typing-cursor inline-block ${className}`}>
      {displayText.split('').map((char, index) => (
        <span key={index} className="text-blue-500">
          {char}
        </span>
      ))}
    </span>
  );
};

export default TypewriterEffect;
