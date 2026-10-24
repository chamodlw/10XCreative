"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const stepTime = Math.abs(Math.floor(duration / (end || 1)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count < 10 && value < 10 ? `0${count}` : count}
      {suffix}
    </span>
  );
}
