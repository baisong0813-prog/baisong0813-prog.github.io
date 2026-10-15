import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { publishedProjects, type PortfolioProject } from "@/lib/projects";

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({ withHeadline = false }: ProjectsProps): ReactNode {
  return (
    <section id="projects" className="relative w-full">
      <div className="mx-auto w-full max-w-300 px-6 sm:px-10">
        {withHeadline && (
          <FadeIn className="mb-10 flex items-end justify-between gap-6 border-b border-foreground/10 pb-5 sm:mb-14">
            <div>
              <p className="mb-2 text-xs font-medium tracking-[0.2em] text-[var(--accent)]">
                SELECTED WORK
              </p>
              <h2 className="text-[2.3rem] font-semibold leading-tight tracking-[-0.05em] text-foreground sm:text-[3rem]">
                精选项目
              </h2>
            </div>
            <span className="pb-1 text-sm text-foreground/45">2024 — 2026</span>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {publishedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}): ReactNode {
  return (
    <FadeIn
      delay={Math.min(index * 0.08, 0.3)}
      className={index === 0 ? "md:col-span-2" : ""}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-card focus-ring group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background"
        aria-label={`查看${project.title}项目详情`}
      >
        <div
          className={`relative overflow-hidden ${project.slug === "yuanfang" ? "bg-[#1d2d3d]" : project.coverFit === "contain" ? "bg-[#e8f6fa]" : "bg-foreground/5"} ${index === 0 ? "aspect-[1.9] sm:aspect-[2.5]" : "aspect-[1.5]"}`}
        >
          <Image
            src={project.cover}
            alt={`${project.title}项目封面`}
            fill
            sizes={index === 0 ? "(min-width: 768px) 1200px, 100vw" : "(min-width: 768px) 570px, 100vw"}
            className={project.coverFit === "contain" ? "object-contain" : "object-cover transition-transform duration-700 group-hover:scale-[1.035]"}
            priority={index === 0}
          />
          <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-foreground shadow-sm backdrop-blur-sm">
            {project.number} / {String(publishedProjects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-xs font-medium tracking-[0.12em] text-[var(--accent)]">
            {project.eyebrow}
          </p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-[2rem]">
              {project.title}
            </h3>
            <span aria-hidden="true" className="text-2xl text-foreground/50 transition-transform group-hover:translate-x-1">↗</span>
          </div>
          <p className="max-w-[55ch] text-[16px] leading-[1.7] text-foreground/65">
            {project.summary}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
