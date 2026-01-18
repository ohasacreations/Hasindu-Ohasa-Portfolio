"use client";

import { useEffect, useRef } from "react";
import { education } from "@/lib/portfolio-data";
import { GraduationCap, ExternalLink } from "lucide-react";

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-24 relative bg-card/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <GraduationCap size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Academic Background</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="section-reveal delay-200 grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-card p-6 rounded-xl border border-border card-hover relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {edu.institution}
                </h3>
                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {edu.period}
                </p>

                {edu.certificateUrl && (
                  <a
                    href={edu.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
