"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { tiktokVideos, tiktokStats, socialLinks } from "@/lib/portfolio-data";
import { Users, Eye, Calendar, Award } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M+";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K+";
  }
  return num.toString();
}

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  format?: boolean;
  startCounting: boolean;
}

function StatCard({ icon: Icon, value, label, suffix = "", format = true, startCounting }: StatCardProps) {
  const count = useCountUp(value, 2000, startCounting);
  const displayValue = format ? formatNumber(count) : count + suffix;

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center card-hover">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        <Icon size={24} />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function TiktokSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Separate observer for stats counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate videos for seamless infinite scroll
  const allVideos = [...tiktokVideos, ...tiktokVideos];

  const stats = [
    { icon: Users, value: tiktokStats.followers, label: "TikTok Followers", format: true },
    { icon: Eye, value: tiktokStats.totalViews, label: "Total Views", format: true },
    { icon: Calendar, value: tiktokStats.startedYear, label: "Started Journey", format: false },
    { icon: Award, value: tiktokStats.yearsExperience, label: "Years Experience", suffix: "+", format: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-card/30"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="section-reveal text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">TikTok Content</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">
            Follow me on{" "}
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @mr_hasi_bro
            </a>{" "}
            for more content
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div ref={statsRef} className="max-w-4xl mx-auto px-6 mb-16">
        <div className="section-reveal delay-200 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              format={stat.format}
              startCounting={startCounting}
            />
          ))}
        </div>
      </div>

      {/* Scrolling Video Cards */}
      <div className="relative section-reveal delay-300">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 animate-scroll-left"
          style={{ width: "max-content" }}
        >
          {allVideos.map((video, index) => (
            <div
              key={`video-${index}`}
              className="flex-shrink-0 w-64 aspect-square rounded-xl overflow-hidden
                         bg-secondary border border-border shadow-xl
                         hover:scale-105 transition-transform duration-300"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
