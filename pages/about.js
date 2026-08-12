import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const profileData = {
  name: '陈鹏飞',
  title: 'Agent 开发工程师',
  bio: '6 年企业系统开发经验，长期深耕 ERP、制造、供应链等复杂业务场景。2024 年起将重心转向 AI 应用落地：基于 LangChain / LangGraph 构建 RAG 问数 Agent，结合 SAP 业务数据实现自然语言查询，并持续探索 Agent 在企业智能化中的工程化落地。',
  location: '中国 / 深圳',
  phone: '13302931959',
  email: 'wowan107@live.com',
  availability: '求职中，目标岗位：Agent 开发工程师。期望工作地点：深圳、新加坡、香港或远程。',
  education: '广东海洋大学 · 本科 · 1997年10月',
};

const mainDirections = [
  'Agent架构 /RAG / LangChain / LangGraph/LlamaIndex ',
  'SAP ERP (MM / PP / SD / FICO) 与 ABAP 开发',
  'AI 问数 / BI 智能助手 / 企业数据自动化',
  'Python / Go / Java 全栈与后端集成',
];

const longTermSkills = [
  'Python / Go / Java / Node.js',
  'Oracle / SQL Server / MySQL / PL-SQL',
  'LangChain / LangGraph / RAG / MCP',
  'SAP ABAP / BAPI / RFC / SmartForms / ALV',
  'Docker / CI-CD / 系统集成',
];

const projects = [
  {
    id: 'PROJ_001',
    code: 'HAOYING_BI_AGENT',
    title: '深圳麦克维尔 · 问数智能 BI Agent',
    period: '2025.9 — 至今',
    type: '生产项目',
    description:
      '基于 LangChain 自主设计并落地企业级 RAG 问数架构，联动 SAP PP/FI/SD 标准化业务接口，支撑业务人员通过自然语言一键查询生产、销售、财务数据，替代传统报表手动导出模式，大幅提升经营决策效率。',
    tags: ['RAG', 'LangChain', 'SAP', 'BI Agent', 'Python', 'LLM'],
  },
  {
    id: 'PROJ_002',
    code: 'SALES_CLAIM_PLATFORM',
    title: '深圳麦克维尔 · 销售认领平台',
    period: '2025',
    type: '生产项目',
    description:
      '主导平台与企业微信深度集成，支持企微消息卡片一键跳转认款；利用 SAP 财务过账 BAPI 实现三大自动过账场景，攻克预付款结转自动化难题；深度优化清账业务规则，独立开发自动清账程序，显著提升财务效率。',
    tags: ['SAP BAPI', 'Python', 'RPA', '企业微信集成', '财务自动化'],
  },
  {
    id: 'PROJ_003',
    code: 'LUZHOU_ERP_IMPL',
    title: '泸州老窖 SAP 实施项目',
    period: '2023.01 — 2025.8',
    type: '实施项目',
    description:
      '参与 PP/FICO/MM/SD模块实施，开发 SD 销售订单汇总报表、MM 采购订单增强与库存台帐流向报表、FI 金税导入导出增强与三大报表、PP 周生产计划排产与工单批量拆分、GSP 不合格品报损审批等核心功能。',
    tags: ['SAP', 'ABAP', 'SmartForms', 'BAPI', 'ALV', 'Enhancement', 'RFC'],
  },
  {
    id: 'PROJ_004',
    code: 'JINGTIAN_SAP_OPS',
    title: '景田百岁山供应链 SAP 运维与条码系统',
    period: '2020.7 — 2022.12',
    type: '运维项目',
    description:
      '负责 SAP 与供应链管理系统双向数据集成，基于 RFC 实现采购订单、供应商主数据、入库单据同步；主导条码管理系统定制开发，覆盖收货、发货、退货、移库、批次 FIFO、定位管理等全流程。',
    tags: ['SAP', 'Java', 'RFC', 'BAPI', '条码系统', '供应链'],
  },
];

const techArticles = [
  {
    title: 'SAP RAG 问数实践：从业务数据到大模型问答的工程化路径',
    description: 'RAG / LangChain / SAP 集成',
    link: '#',
  },
  {
    title: 'ABAP 与 Python 协同：构建企业级财务自动化过账链路',
    description: 'SAP BAPI / 财务自动化',
    link: '#',
  },
  {
    title: '企业 Agent 性能调优：RAG 准确率、幻觉治理与容错机制',
    description: 'AI Agent / LLM / 工程化',
    link: '#',
  },
];

const workExperience = [
  {
    company: '浩鲸新智能科技有限公司 · ABAP开发 / Python开发',
    period: '2025.09 — 至今',
    description:
      '负责深圳麦克维尔问数智能 BI Agent 项目（RAG + LangChain + SAP 集成）、销售认领平台（企微集成 + SAP 财务自动化过账 + 自动清账）、ERP 运维（FI/SD 报表与批量导入）等核心交付。',
  },
  {
    company: '浙江中拓人力资源有限公司 · ABAP 开发',
    period: '2023.01 — 2025.08',
    description:
      '负责泸州老窖 SAP 实施项目（PP/FICO/MM/SD），涵盖销售订单增强、采购入库单、金税导入、利润报表、生产计划排产、GSP 质量档案等模块开发。',
  },
  {
    company: '深圳市时代微云科技有限公司 · JAVA 开发工程师',
    period: '2020.07 — 2022.12',
    description:
      '负责景田百岁山供应链管理系统与 SAP 集成对接（RFC 双向同步）、SAP 条码管理系统定制开发（收货、发货、FIFO、定位管理等）。',
  },
];

const cardBase =
  'p-6 bg-[#FAF9F5] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm';
const cardInteractive = `${cardBase} transition hover:shadow-md`;

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO title={`关于我 - ${globalData.name}`} description={profileData.bio} />
      <Header name={globalData.name} />

      <main className="w-full">
        {/* Profile Section */}
        <section className="mb-16 text-center">
          {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 dark:from-slate-200 dark:to-slate-400" /> */}
          <h1 className="mb-2 text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {profileData.name}
          </h1>
          <p className="mb-4 text-lg text-slate-600 dark:text-slate-400">{profileData.title}</p>
          <p className="mb-4 max-w-xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
            {profileData.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{profileData.location}</span>
            <span aria-hidden="true">|</span>
            <span>{profileData.education}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
            <a href={`tel:${profileData.phone}`} className="hover:text-slate-900 dark:hover:text-slate-100">{profileData.phone}</a>
            <span aria-hidden="true">|</span>
            <a href={`mailto:${profileData.email}`} className="hover:text-slate-900 dark:hover:text-slate-100">{profileData.email}</a>
          </div>
          <p className="mb-6 max-w-xl mx-auto text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {profileData.availability}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="px-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-[#FAF9F5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            >
              发邮件
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="px-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-[#FAF9F5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            >
              打电话
            </a>
          </div>
        </section>

        {/* Skills & Directions */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">个人技能</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${cardBase}`}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">核心方向</h3>
              <ul className="space-y-3">
                {mainDirections.map((dir) => (
                  <li key={dir} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                    <span>{dir}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${cardBase}`}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">技术栈</h3>
              <ul className="space-y-3">
                {longTermSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects / Case Studies */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">项目经历</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className={cardInteractive}>
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{project.id}</span>
                  <span className="text-slate-400" aria-hidden="true">/</span>
                  <span>{project.code}</span>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {project.type}
                </p>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{project.period}</p>
                <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Writing */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">技术文章</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            聚焦 AI 企业落地、RAG 工程化、SAP 集成与财务自动化等实践，记录真实可复用的方法与取舍。
          </p>
          <div className="space-y-4">
            {techArticles.map((article) => (
              <a
                key={article.title}
                href={article.link}
                className={`block ${cardInteractive}`}
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{article.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{article.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">工作经历</h2>
          <div>
            {workExperience.map((exp, index) => (
              <div
                key={exp.company}
                className={`flex gap-4 ${index !== workExperience.length - 1 ? 'pb-6' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                  {index !== workExperience.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{exp.company}</h3>
                  <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates & Self Evaluation */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">证书与自我评价</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={cardBase}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">证书</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                  软件设计师（中级职称）
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                  CET-6 英语六级
                </li>
              </ul>
            </div>
            <div className={cardBase}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">自我评价</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  对 AI、Agent 等技术有深入研究
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  自主学习能力出众，享受团队合作
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  工作态度好，责任感强，乐于助人
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  勇于挑战困难，强烈追求成就
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
