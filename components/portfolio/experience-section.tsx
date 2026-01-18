"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-48 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Briefcase size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="section-reveal delay-200 space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-border last:border-transparent last:pb-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />

              <div className="bg-card p-6 rounded-xl border border-border card-hover hover:shadow-[0_0_20px_rgba(96,165,250,0.25)] transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {exp.period}
                  {exp.location && ` • ${exp.location}`}
                </p>

                <p className="text-muted-foreground">{exp.description}</p>

                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
