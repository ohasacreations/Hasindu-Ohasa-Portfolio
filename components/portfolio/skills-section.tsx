"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const skillCategories = [
  { key: "languages", label: "Languages", icon: "💻" },
  { key: "frameworks", label: "Frameworks", icon: "⚛️" },
  { key: "databases", label: "Databases", icon: "🗄️" },
  { key: "design", label: "Design", icon: "🎨" },
  { key: "tools", label: "Tools", icon: "🛠️" },
  { key: "platforms", label: "Platforms", icon: "☁️" },
] as const;

function SkillBadge({ skill, delay }: { skill: string; delay: number }) {
  return (
    <div
      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground
                 hover:bg-primary hover:text-primary-foreground transition-all duration-300
                 cursor-default hover:scale-105 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </div>
  );
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("languages");

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

  const currentSkills = skills[activeCategory as keyof typeof skills] || [];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative bg-card/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="section-reveal delay-200 flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              type="button"
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="section-reveal delay-300">
          <div className="flex flex-wrap justify-center gap-3">
            {currentSkills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} delay={index * 50} />
            ))}
          </div>
        </div>

        {/* Infinite Scroll Skills Banner */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map(
              (skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0 px-6 py-3 mx-2 bg-secondary/50 rounded-full text-sm text-muted-foreground whitespace-nowrap"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
