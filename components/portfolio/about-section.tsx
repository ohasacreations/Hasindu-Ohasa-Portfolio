"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/portfolio-data";
import { AboutStats } from "./about-stats";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-48 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="section-reveal delay-200 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.story}
            </p>
          </div>

          <div className="section-reveal delay-300 space-y-6">
            {/* Stats */}
            <AboutStats isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
