import type { Metadata } from "next";

export const siteConfig = {
  name: "李百凇 · UX 设计作品集",
  description: "聚焦服务体验、复杂流程与交互系统的 UX 设计作品集。",
  url: "https://baisong0813-prog.github.io",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: "李百凇" }],
  keywords: ["UX 设计", "体验设计", "交互设计", "作品集", "酒店服务"],
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
    },
  };
}
