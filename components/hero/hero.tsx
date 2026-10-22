import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-300 px-6 pt-40 pb-14 sm:px-10 sm:pt-52 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.94fr] md:gap-14">
          <FadeIn className="flex flex-col items-start">
            <p className="mb-5 text-sm font-medium tracking-[0.2em] text-foreground/55">
              LI BAISONG / UX DESIGNER
            </p>
            <h1 className="max-w-none text-[clamp(2.35rem,6vw,5rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-foreground">
              在复杂系统中
              <br />
              <span className="text-[var(--accent)]">找到体验的秩序</span>
            </h1>
            <p className="mt-7 text-[17px] leading-[1.8] tracking-tight text-foreground/65 sm:text-[19px]">
              我是李百凇，一名 UX设计师。
              <br />
              <span className="xl:whitespace-nowrap">
                擅长梳理复杂业务，建立从产品逻辑到界面呈现的一致体验。
              </span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="focus-ring inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                浏览项目
              </Link>
              <Link
                href="/projects/xingguanjia"
                className="focus-ring inline-flex min-h-11 items-center rounded-full border border-foreground/15 px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                从星管家开始
              </Link>
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-foreground/8 bg-white shadow-[0_20px_80px_-35px_rgba(30,22,39,.20)]">
              <Image
                src="/hero-project-directory.png"
                alt="作品集项目目录：星管家、星球法宝与 PMS 体验优化"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
