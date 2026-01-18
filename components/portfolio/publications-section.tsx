"use client";

import { useEffect, useRef } from "react";
import { publications } from "@/lib/portfolio-data";
import { BookOpen, ExternalLink } from "lucide-react";

export function PublicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="publications" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <BookOpen size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Publications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Written Works</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="section-reveal delay-200 grid md:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card p-6 rounded-xl border border-border card-hover group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {pub.platform}
                </p>
                <p className="text-xs text-muted-foreground">{pub.date}</p>

                <div className="mt-4 flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Publication <ExternalLink size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
