export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '江皓铖'
export const headline = '后端开发工程师 · 人工智能专业'
export const introduction =
  "对Java后端技术有浓厚兴趣，具备扎实的基础和持续学习的能力，逻辑清晰，注重代码质量与系统可维护性。具备良好的团队沟通与协作精神，渴望在实战项目中不断提升工程能力。"
export const email = '1634594707@qq.com'
export const githubUsername = '1634594707'

// about page
export const aboutMeHeadline = '关于我'
export const aboutParagraphs = [
  "我是江皓铖，温州大学人工智能专业在读本科生，对Java后端开发充满热情。",
  '在校期间积极参与项目开发，掌握了Spring Boot、MyBatis、MySQL、Redis等主流技术栈，并在实习中积累了实际项目经验。',
  "我注重代码质量与系统可维护性，具备良好的学习能力和团队协作精神，期待在后端开发领域持续成长。",
]

// blog
export const blogHeadLine = "技术博客"
export const blogIntro =
  "分享我在后端开发、人工智能和技术学习中的思考与实践。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/1634594707',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'java',
  'spring',
  'springboot',
  'mysql',
  'redis',
  'postgresql',
  'neo4j',
  'docker',
  'git',
  'github',
  'rabbitmq',
  'nginx',
  'linux',
  'maven',
  'intellijidea',
  'postman',
  'jwt',
  'mybatis',
]
