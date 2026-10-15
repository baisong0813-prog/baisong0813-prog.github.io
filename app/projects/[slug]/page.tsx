import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { FadeIn } from "@/components/ui/motion-primitives";
import { getProject, publishedProjects } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return createMetadata({ title: "项目未找到", path: "/projects" });
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = publishedProjects.findIndex((item) => item.slug === slug);
  const nextProject = publishedProjects[(index + 1) % publishedProjects.length] ?? project;

  return (
    <main id="main-content" className="min-h-screen">
      <div className="mx-auto max-w-330 px-5 pt-36 pb-28 sm:px-8 sm:pt-46 lg:px-10">
        <FadeIn>
          <div className="mb-9 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link href="/projects" className="focus-ring rounded-md text-foreground/55 transition-colors hover:text-foreground">
              ← 返回项目列表
            </Link>
            <span className="font-mono text-xs tracking-[0.18em] text-foreground/45">
              CASE {project.number} / {String(publishedProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-8 border-t border-foreground/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">
                {project.eyebrow}
              </p>
              <h1 className="text-[3rem] font-semibold leading-[1.12] tracking-[-0.055em] sm:text-[4.5rem]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.75] text-foreground/65 sm:text-[21px]">
                {project.summary}
              </p>
            </div>
            <span className="w-fit rounded-full border border-foreground/10 px-4 py-2 text-xs text-foreground/50">
              设计案例 · {project.sections.length} 个章节
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-foreground/5 sm:mt-16 sm:rounded-[2rem]">
          <Image
            src={project.cover}
            alt={`${project.title}作品集封面`}
            width={1920}
            height={project.coverHeight ?? (slug === "xingguanjia" ? 1458 : 1074)}
            sizes="(min-width: 1320px) 1240px, 100vw"
            priority
            className="h-auto w-full"
          />
        </FadeIn>

        <section className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-foreground/10 bg-background p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">THE CHALLENGE / 设计问题</p>
            <p className="mt-5 text-[17px] leading-[1.8] text-foreground/80">{project.challenge}</p>
          </div>
          <div className="rounded-[1.5rem] border border-foreground/10 bg-background p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">THE APPROACH / 设计思路</p>
            <p className="mt-5 text-[17px] leading-[1.8] text-foreground/80">{project.approach}</p>
          </div>
        </section>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-32 border-l border-foreground/12 pl-5">
              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-foreground/45">CONTENTS / 章节</p>
              <ol className="space-y-4">
                {project.sections.map((section, sectionIndex) => (
                  <li key={section.title}>
                    <a href={`#section-${sectionIndex + 1}`} className="focus-ring block rounded-sm text-[14px] leading-[1.5] text-foreground/55 transition-colors hover:text-[var(--accent)]">
                      <span className="mr-2 font-mono text-xs text-foreground/35">{String(sectionIndex + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="min-w-0 space-y-16 sm:space-y-24">
            {project.sections.map((section, sectionIndex) => (
              <section key={section.title} id={`section-${sectionIndex + 1}`} className="scroll-mt-28">
                <div className="mb-6 flex items-start gap-5 border-t border-foreground/10 pt-6">
                  <span className="pt-1 font-mono text-xs tracking-[0.15em] text-[var(--accent)]">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-[1.5rem] font-semibold leading-[1.25] tracking-[-0.04em] text-foreground sm:text-[1.9rem]">
                      {section.title}
                    </h2>
                    <p className="mt-2 max-w-[57ch] text-[15px] leading-[1.7] text-foreground/60">
                      {section.note}
                    </p>
                  </div>
                </div>
                <figure className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/3">
                  <div className="overflow-x-auto">
                    <div className="min-w-[680px] sm:min-w-0">
                      <Image
                        src={section.image}
                        alt={`${project.title}：${section.title}的设计画面`}
                        width={section.width}
                        height={section.height}
                        sizes="(min-width: 1024px) 930px, (min-width: 640px) 90vw, 680px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-foreground/8 px-4 py-3 text-xs text-foreground/50 sm:px-5">
                    <span>{section.title} · 原设计画面</span>
                    <a href={section.image} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-md underline underline-offset-4 hover:text-foreground">
                      查看原尺寸
                    </a>
                  </figcaption>
                </figure>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-foreground/10 pt-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-foreground/45">NEXT CASE</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="focus-ring group flex items-end justify-between gap-6 rounded-2xl py-4"
          >
            <div>
              <span className="text-sm text-foreground/50">{nextProject.eyebrow}</span>
              <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.045em] transition-colors group-hover:text-[var(--accent)] sm:text-[3rem]">
                {nextProject.title}
              </h2>
            </div>
            <span aria-hidden="true" className="pb-2 text-3xl text-foreground/50 transition-transform group-hover:translate-x-2">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
