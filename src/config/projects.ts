// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
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
    description: '在校期间学习成绩优异，获得校级奖学金',
    date: '2024-2025',
    location: '温州大学',
  },
  {
    name: '大学英语四级',
    description: '通过大学英语四级考试（CET-4）',
    date: '2022',
    location: '温州大学',
  },
]

// Work Experience / Internships
export const workHeadLine = "实习经历"
export const workIntro = "我的实习和工作经验"

export const workExperience: Array<ActivityItemType> = [
  {
    name: 'Java开发实习生',
    description: '参与医药智能知识图谱平台的开发，负责数据源架构设计、Redis缓存集成、数据清洗工具开发以及智能问答接口实现。通过AOP实现日志监控系统，有效辅助性能分析与问题定位。',
    date: '2025.07 - 2025.09',
    location: '温州大学大数据与信息技术研究院',
  },
]

// Research & Projects
export const projectHeadLine = "项目经验"
export const projectIntro = "我参与开发的技术项目和实践经验"

export const projects: Array<ProjectItemType> = [
  {
    name: 'AgentFlow - 智能AI Agent系统',
    description: '基于Spring AI构建的智能Agent决策系统。实现Think-Execute循环机制驱动任务规划，构建灵活可扩展的工具调用框架，集成pgvector进行向量化存储与RAG知识库检索，支持多模型统一接口封装。',
    link: { href: '#', label: '2025.10 - 2026.01' },
    tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'SSE']
  },
  {
    name: '医药智能知识图谱平台',
    description: 'MySQL+Neo4j多数据源架构的医药知识图谱系统。集成Redis缓存优化查询性能，开发数据清洗与转换工具，实现基于规则匹配的智能问答接口，利用AOP实现非侵入式接口日志监控。',
    link: { href: '#', label: '2025.07 - 2025.09' },
    tags: ['Spring Boot', 'MyBatis', 'Neo4j', 'MySQL', 'Redis']
  },
  {
    name: 'CodeNote技术笔记平台',
    description: '技术笔记分享与交流平台。实现基于JWT的无感登录认证系统，支持Markdown格式笔记的创建、编辑与检索，基于WebSocket实现实时互动消息推送，通过异步处理提升系统性能。',
    link: { href: '#', label: '2024.10 - 2025.02' },
    tags: ['Spring Boot', 'MyBatis', 'MySQL', 'Redis', 'WebSocket']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "兴趣爱好"
export const activitiesIntro = "个人兴趣和社区贡献"

export const activities: Array<ActivityItemType> = [
  {
    name: '技术博客写作',
    description:
      '撰写技术博客，分享后端开发经验和学习心得。',
    date: '2024至今',
    location: '线上',
  },
  {
    name: '开源项目贡献',
    description:
      '参与开源社区，为Java项目贡献代码。',
    date: '2024至今',
    location: 'GitHub',
  },
  {
    name: '技术交流分享',
    description:
      '参与校内技术交流，分享项目经验。',
    date: '2023至今',
    location: '温州大学',
  },
]
