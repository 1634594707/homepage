// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  coverImage?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "获奖荣誉"
export const awardsIntro = "学术和专业成就的认可"

export const awards: Array<ActivityItemType> = [
  {
    name: '校级奖学金',
    description: '在校期间综合表现良好，获校级奖学金',
    date: '2025',
    location: '温州大学',
  },
]

// Work Experience / Internships
export const workHeadLine = "实习经历"
export const workIntro = "我的实习和工作经验"

export const workExperience: Array<ActivityItemType> = [
  {
    name: '后端开发实习生',
    description: '参与医药智能知识图谱平台开发，完成 PostgreSQL→Neo4j 双库最终一致（Outbox + 异步消费 + MERGE 幂等），主导 RAG 问答链路建设，并结合 Redis Cache-Aside 与版本失效机制将关键接口平均响应降低约 60%。',
    date: '2026.03 - 至今',
    location: '温州大学大数据与信息技术研究院',
  },
]

// Research & Projects
export const projectHeadLine = "项目经验"
export const projectIntro = "我参与开发的技术项目和实践经验"

export const projects: Array<ProjectItemType> = [
  {
    name: 'MathAnim Desktop · 课堂动画客户端',
    description: '基于 Spring Boot + JavaFX + Manim 构建 AI 课堂动画生成客户端，设计多阶段 AI→Manim 流水线，落地本机渲染进程治理、失败循环修补与任务持久化恢复，保障可复现与稳定交付。',
    link: { href: 'https://github.com/1634594707/mathanim-desktop', label: '2026.03 - 至今' },
    tags: ['Spring Boot', 'JavaFX', 'SQLite', 'OpenAI Compatible API', 'Manim'],
    coverImage: '/project-covers/mathanim.jpg'
  },
  {
    name: 'AI Project Initiator',
    description: '设计并实现 5-Phase 项目启动流水线引擎，搭建 Skill 插件化扩展框架与分层依赖治理，沉淀 PRD/MVP/Roadmap 产出契约，支撑 10+ 项目快速启动并降低前期返工成本。',
    link: { href: 'https://github.com/1634594707/AI-Project-Initiator', label: '2026.02 - 2026.02' },
    tags: ['Node.js', 'YAML', 'CLI', 'Plugin Architecture', 'Documentation Engineering'],
    coverImage: '/project-covers/ai-project-initiator.jpg'
  },
  {
    name: 'AgentFlow - 智能AI Agent系统',
    description: '基于 Spring AI 构建 Think→Execute→Loop 决策执行引擎，结合 allowed_tools 白名单与 MAX_STEPS 终止机制实现可控收敛；接入 pgvector RAG 检索、多模型路由与 SSE 流式推送，强化可追溯性与实时交互体验。',
    link: { href: 'https://github.com/1634594707/AgentFlow', label: '2025.10 - 2026.02' },
    tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'SSE'],
    coverImage: '/project-covers/agentflow.jpg'
  },
  {
    name: 'PytestOps · API 自动化测试框架',
    description: '基于 Python 3.12 + pytest 构建五层解耦自动化测试框架，支持 YAML 数据驱动、JSONPath/正则提取、跨用例参数传递、CLI 工具链与 Jenkins 集成，支撑 200+ 接口稳定回归并显著缩短问题响应时间。',
    link: { href: 'https://github.com/1634594707/PytestOps', label: '2025.01 - 2025.03' },
    tags: ['Python', 'pytest', 'YAML', 'Allure', 'Jenkins'],
    coverImage: '/project-covers/pytestops.jpg'
  },
  {
    name: 'VintageWisdom · 轻量决策支持系统',
    description: '基于历史案例的轻量决策支持系统，采用 Python 后端与 Next.js 前端架构，聚焦可上线、易维护和最小可运行交付，支持 API、工作台与配置化扩展。',
    link: { href: 'https://github.com/1634594707/vintagewisdom', label: '2026.03 - 至今' },
    tags: ['Python', 'Next.js', 'TypeScript', '决策支持', '全栈'],
    coverImage: '/project-covers/vintagewisdom.jpg'
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "兴趣爱好"
export const activitiesIntro = "个人兴趣和社区贡献"

export const activities: Array<ActivityItemType> = [
  {
    name: '技术写作与知识沉淀',
    description:
      '持续沉淀后端与 AI 工程实践，整理项目复盘与技术文档。',
    date: '2025至今',
    location: '线上',
  },
  {
    name: '工程化工具实践',
    description:
      '围绕 CLI、测试框架与流程自动化进行工具化开发与优化。',
    date: '2025至今',
    location: '个人项目',
  },
]
