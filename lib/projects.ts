export type ProjectSection = {
  title: string;
  note: string;
  image: string;
  width: number;
  height: number;
};

export type PortfolioProject = {
  slug: string;
  published?: boolean;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  approach: string;
  cover: string;
  coverFit?: "contain" | "cover";
  coverHeight?: number;
  accent: string;
  sections: ProjectSection[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "xingguanjia",
    number: "01",
    title: "星管家",
    eyebrow: "AI 酒店服务 · 概念设计",
    summary: "将住客的自然语言需求转化为可确认、可执行、可追踪的酒店服务。",
    challenge: "传统服务入口、对话与履约分散，住客需要自己判断从哪里开始，也难以确认服务是否正在被处理。",
    approach: "以统一的对话入口承接问答与服务，再通过结构化确认卡片和持续可见的订单状态，形成完整服务闭环。",
    cover: "/projects/xing/01.webp",
    coverHeight: 1216,
    accent: "#d7754f",
    sections: [
      { title: "产品定位与核心场景", note: "从住客的服务需求与酒店履约能力出发，明确设计机会。", image: "/projects/xing/02.webp", width: 1600, height: 1381 },
      { title: "需求输入与服务履约", note: "将表达、确认、执行与结果反馈串成连续体验。", image: "/projects/xing/03.webp", width: 1600, height: 1340 },
      { title: "寻找服务体验切入点", note: "以住客链路对应关键页面和设计问题。", image: "/projects/xing/04.webp", width: 1600, height: 1864 },
      { title: "业务目标与设计策略", note: "兼顾需求承接效率与服务过程的确定性。", image: "/projects/xing/05.webp", width: 1600, height: 1944 },
      { title: "首页：对话与任务融合", note: "让住客在同一页面发现服务、直接表达需求。", image: "/projects/xing/06.webp", width: 1600, height: 1433 },
      { title: "首页方案与体验对比", note: "围绕入口、表达与反馈，展开核心交互方案。", image: "/projects/xing/07.webp", width: 1600, height: 5774 },
      { title: "复合需求与服务状态", note: "拆解多项需求，并让服务卡片随履约状态持续更新。", image: "/projects/xing/08.webp", width: 1600, height: 11516 },
      { title: "结构化服务与表单体系", note: "以可发现的固定入口和组件化表单承接不同服务场景。", image: "/projects/xing/09.webp", width: 1600, height: 13666 },
      { title: "AI 辅助设计实践", note: "借助 AI 梳理产品体验蓝图、拓展 IP 场景资产，并沉淀可维护的 Figma 色彩与文字样式。", image: "/projects/xing/10.webp", width: 1600, height: 4322 },
    ],
  },
  {
    slug: "xingqiufabao",
    number: "02",
    title: "百达屋星球法宝",
    eyebrow: "会员权益 · App 改版",
    summary: "重构会员权益的发现与使用路径，让星球法宝从功能列表走向可理解的权益体验。",
    challenge: "用户需要在多个功能与权益之间辨别价值，入口、说明与使用链路仍有优化空间。",
    approach: "围绕项目目标与用户路径梳理机会点，调整信息层级、页面入口与关键交互，使权益更容易被发现和使用。",
    cover: "/projects/fabao/01.webp",
    accent: "#f57b30",
    sections: [
      { title: "项目背景与目标", note: "明确星球法宝在会员体验中的定位与改版问题。", image: "/projects/fabao/02.webp", width: 1920, height: 2805 },
      { title: "设计策略", note: "把分散的体验问题收敛为可执行的优化方向。", image: "/projects/fabao/03.webp", width: 1920, height: 4789 },
      { title: "核心页面改版", note: "重组页面层级、权益呈现和操作入口。", image: "/projects/fabao/04.webp", width: 1920, height: 5970 },
      { title: "体验细节与交互", note: "从关键操作与反馈细节完善整体体验。", image: "/projects/fabao/05.webp", width: 1920, height: 5202 },
      { title: "交付与验证", note: "呈现交互文档与设计验证的过程。", image: "/projects/fabao/06.webp", width: 1920, height: 5202 },
    ],
  },
  {
    slug: "pms",
    number: "03",
    title: "PMS 系统优化",
    eyebrow: "B 端系统 · 交互设计",
    summary: "聚焦酒店管理后台的高频任务，优化信息组织与操作流程。",
    challenge: "后台业务信息密集、任务链路复杂，页面效率与操作规范直接影响一线使用体验。",
    approach: "从业务现状和用户调研出发，优化订单与服务相关页面，并建立可复用的弹层交互规范。",
    cover: "/projects/pms/01.webp",
    coverFit: "contain",
    accent: "#1688c2",
    sections: [
      { title: "项目范围与规划", note: "聚焦订单、服务相关页面与弹层交互规范。", image: "/projects/pms/02.webp", width: 1920, height: 1986 },
      { title: "一线用户调研", note: "从实际岗位与操作场景中识别效率问题。", image: "/projects/pms/03.webp", width: 1920, height: 5010 },
      { title: "核心页面优化", note: "调整信息层级和高频操作路径。", image: "/projects/pms/04.webp", width: 1920, height: 6285 },
      { title: "交互规范沉淀", note: "把局部优化延伸为可复用的界面规则。", image: "/projects/pms/05.webp", width: 1920, height: 6966 },
      { title: "细节与状态设计", note: "补足复杂业务场景下的操作反馈。", image: "/projects/pms/06.webp", width: 1920, height: 7202 },
    ],
  },
  {
    slug: "yuanfang",
    published: false,
    number: "04",
    title: "百度地图 · 元芳",
    eyebrow: "出行决策 · 交互设计",
    summary: "升级路线规划中的智能出行决策卡片，让沿途信息更易识别、比较与使用。",
    challenge: "随着服务接入增多，元芳卡片出现空间利用率低、信息识别度弱和二级页面衔接不顺畅等问题。",
    approach: "先梳理卡片现状与业务目标，再统一卡片间距和交互规则，针对路线、天气、沿途服务等内容采用差异化呈现。",
    cover: "/projects/yuanfang/01.webp",
    coverFit: "contain",
    coverHeight: 1125,
    accent: "#3f86e8",
    sections: [
      { title: "项目背景", note: "明确元芳在路线规划页中的定位与现有框架。", image: "/projects/yuanfang/02.webp", width: 1920, height: 3175 },
      { title: "现状与目标", note: "从空间、识别和链路问题出发，定义体验升级方向。", image: "/projects/yuanfang/03.webp", width: 1920, height: 8990 },
      { title: "定义设计规范", note: "统一卡片间距、容器高度与跨页面操作位置。", image: "/projects/yuanfang/04.webp", width: 1920, height: 6590 },
      { title: "强化决策元素", note: "让景区、酒店、路线对比及天气等信息更便于判断。", image: "/projects/yuanfang/05.webp", width: 1920, height: 14890 },
      { title: "细节质感打磨", note: "完善路线切换、天气感知与新手攻略等细节。", image: "/projects/yuanfang/06.webp", width: 1920, height: 4360 },
      { title: "效果总览", note: "展示长短途场景与卡片体系的最终设计效果。", image: "/projects/yuanfang/07.webp", width: 1920, height: 4980 },
    ],
  },
];

export const publishedProjects = projects.filter((project) => project.published !== false);

export function getProject(slug: string): PortfolioProject | undefined {
  return publishedProjects.find((project) => project.slug === slug);
}
