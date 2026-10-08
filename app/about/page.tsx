import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "关于",
  description: "李百凇的体验设计关注点与作品集项目。",
  path: "/about",
});

const methods = [
  {
    number: "01",
    title: "从业务目标找到体验问题",
    text: "先理解业务为什么需要改变，再回到具体的用户场景，确定值得投入的设计切入点。",
  },
  {
    number: "02",
    title: "把复杂流程变得可理解",
    text: "通过信息架构、状态反馈与操作权限的推敲，让用户知道下一步能做什么、系统正在做什么。",
  },
  {
    number: "03",
    title: "让视觉服务于任务",
    text: "以清晰的层级、可复用的组件和一致的品牌语言，支持不同场景中的高效使用。",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <div className="mx-auto max-w-300 px-6 pt-40 pb-28 sm:px-10 sm:pt-52">
        <FadeIn>
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">ABOUT / 关于</p>
          <h1 className="max-w-[14ch] text-[3rem] font-semibold leading-[1.18] tracking-[-0.055em] sm:text-[4.5rem]">
            从服务场景出发，
            <br />
            让复杂体验更清晰。
          </h1>
          <p className="mt-7 max-w-[44ch] text-[18px] leading-[1.8] text-foreground/65 sm:text-[21px]">
            我是李百凇，一名 UX 设计师。这个作品集收录了酒店 AI 服务、会员权益与后台系统三个项目，记录我如何从产品问题走向具体的交互方案。
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-3">
          {methods.map((method) => (
            <div key={method.number} className="rounded-[1.5rem] border border-foreground/10 bg-background p-7">
              <span className="font-mono text-xs text-[var(--accent)]">{method.number}</span>
              <h2 className="mt-10 text-[1.3rem] font-semibold leading-[1.35] tracking-[-0.035em]">{method.title}</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-foreground/60">{method.text}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 grid items-center gap-8 rounded-[2rem] border border-foreground/10 bg-background p-5 sm:p-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[1.45] overflow-hidden rounded-[1.5rem] bg-[#2a1613]">
            <Image src="/projects/xing/01.webp" alt="星管家 AI 服务设计画面" fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover" />
          </div>
          <div className="px-2 py-4 sm:px-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">FEATURED CASE / 精选案例</p>
            <h2 className="mt-4 text-[1.8rem] font-semibold tracking-[-0.04em]">星管家 · AI 酒店服务体验</h2>
            <p className="mt-4 text-[16px] leading-[1.8] text-foreground/65">
              对话并不是另一个入口，而是服务开始、确认与反馈的连续界面。
            </p>
            <Link href="/projects/xingguanjia" className="focus-ring mt-6 inline-flex rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium hover:bg-foreground/5">
              阅读项目
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
