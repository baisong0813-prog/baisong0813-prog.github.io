import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import { publishedProjects } from "@/lib/projects";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "项目",
  description: publishedProjects.some((project) => project.slug === "yuanfang")
    ? "星管家、百达屋星球法宝、PMS 系统优化与百度地图元芳四个体验设计项目。"
    : "星管家、百达屋星球法宝与 PMS 系统优化三个体验设计项目。",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-300 px-6 pt-40 pb-14 sm:px-10 sm:pt-52 sm:pb-20">
        <FadeIn className="flex flex-col gap-5">
          <p className="text-xs font-medium tracking-[0.2em] text-[var(--accent)]">SELECTED WORK</p>
          <h1 className="text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.05em] text-foreground md:text-[3.5rem]">
            项目作品
          </h1>
          <p className="max-w-[46ch] text-[17px] leading-[1.7] text-foreground/65 sm:text-[19px]">
            {publishedProjects.some((project) => project.slug === "yuanfang")
              ? "从住客侧 AI 服务、会员权益、酒店后台系统到地图出行决策，展示我对复杂体验问题的不同切入方式。"
              : "从住客侧 AI 服务、会员权益到酒店后台系统，展示我对复杂服务体验的不同切入方式。"}
          </p>
        </FadeIn>
      </section>
      <Projects />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
