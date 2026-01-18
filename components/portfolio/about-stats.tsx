"use client";

import { useEffect, useState } from "react";
import { tiktokStats } from "@/lib/portfolio-data";

function useCountAnimation(
  end: number,
  duration: number = 2000,
  start: number = 0,
  shouldStart: boolean = false
) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, shouldStart]);

  return count;
}

export function AboutStats({ isVisible }: { isVisible: boolean }) {
  const followers = useCountAnimation(
    tiktokStats.followers / 1000,
    2000,
    0,
    isVisible
  );
  const views = useCountAnimation(
    tiktokStats.totalViews / 1000000,
    2000,
    0,
    isVisible
  );
  const startYear = useCountAnimation(
    tiktokStats.startedYear,
    2000,
    2000,
    isVisible
  );
  const years = useCountAnimation(
    tiktokStats.yearsExperience,
    2000,
    0,
    isVisible
  );

  const stats = [
    { value: `${followers}K+`, label: "TikTok Followers" },
    { value: `${views}M+`, label: "Total Views" },
    { value: startYear.toString(), label: "Started Journey" },
    { value: `${years}+`, label: "Years Experience" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-card p-6 rounded-xl border border-border card-hover hover:shadow-[0_0_20px_rgba(96,165,250,0.25)] transition-shadow duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl font-bold text-gradient">{stat.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
