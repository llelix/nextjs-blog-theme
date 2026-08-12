import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const profileData = {
  name: 'Pengfei Chen',
  title: 'AI Agent Engineer',
  bio: '6 years of enterprise system development experience, with deep expertise in ERP, manufacturing, and supply chain. Since 2024, focused on AI application delivery: building RAG query agents with LangChain / LangGraph, enabling natural-language analytics over SAP business data, and exploring scalable agent engineering in enterprise intelligence.',
  location: 'China / Shenzhen',
  phone: '13302931959',
  email: 'wowan107@live.com',
  availability: 'Open to opportunities. Target role: Agent Development Engineer. Preferred locations: Shenzhen, Singapore, Hong Kong, or remote.',
  education: 'Guangdong Ocean University · Bachelor’s · Oct 1997',
};

const mainDirections = [
  'Agent Architecture / RAG / LangChain / LangGraph / LlamaIndex',
  'SAP ERP (MM / PP / SD / FICO) and ABAP Development',
  'AI Query Agent / BI Intelligent Assistant / Enterprise Data Automation',
  'Python / Go / Java full-stack and backend integration',
];

const longTermSkills = [
  'Python / Go / Java / Node.js',
  'Oracle / SQL Server / MySQL / PL-SQL',
  'LangChain / LangGraph / RAG / MCP',
  'SAP ABAP / BAPI / RFC / SmartForms / ALV',
  'Docker / CI-CD / System Integration',
];

const projects = [
  {
    id: 'PROJ_001',
    code: 'HAOYING_BI_AGENT',
    title: 'Shenzhen McQuay · Intelligent BI Query Agent',
    period: '2025.9 — Present',
    type: 'Production Project',
    description:
      'Independently designed and delivered an enterprise-grade RAG query architecture with LangChain, integrated with standardized SAP PP/FI/SD interfaces. Enabled business users to query production, sales, and financial data through natural language, replacing manual report exports and significantly improving decision-making efficiency.',
    tags: ['RAG', 'LangChain', 'SAP', 'BI Agent', 'Python', 'LLM'],
  },
  {
    id: 'PROJ_002',
    code: 'SALES_CLAIM_PLATFORM',
    title: 'Shenzhen McQuay · Sales Claim Platform',
    period: '2025',
    type: 'Production Project',
    description:
      'Led deep integration with WeCom Work, enabling one-click payment claiming via message cards. Implemented three automatic posting scenarios using SAP financial posting BAPIs, solving prepayment结转 automation challenges. Optimized clearing business rules and independently developed automatic clearing programs, significantly improving financial efficiency.',
    tags: ['SAP BAPI', 'Python', 'RPA', 'WeCom Integration', 'Finance Automation'],
  },
  {
    id: 'PROJ_003',
    code: 'LUZHOU_ERP_IMPL',
    title: 'Luzhou Laojiao SAP Implementation Project',
    period: '2023.01 — 2025.8',
    type: 'Implementation Project',
    description:
      'Participated in PP/FICO/MM/SD module implementation. Developed SD sales order summary reports, MM purchase order enhancements with inventory flow reports, FI golden tax import/export enhancements with three major financial statements, PP weekly production planning with work order batch splitting, GSP non-conforming product loss approval and other core functionalities.',
    tags: ['SAP', 'ABAP', 'SmartForms', 'BAPI', 'ALV', 'Enhancement', 'RFC'],
  },
  {
    id: 'PROJ_004',
    code: 'JINGTIAN_SAP_OPS',
    title: 'Jing Tian Baishuishan Supply Chain SAP Operations and Barcode System',
    period: '2020.7 — 2022.12',
    type: 'Operations Project',
    description:
      'Responsible for bidirectional data integration between SAP and supply chain management system, implementing purchase order, vendor master data, and inbound document synchronization via RFC. Led custom development of barcode management system covering receipt, shipment, return, transfer, batch FIFO, location management and other full-process scenarios.',
    tags: ['SAP', 'Java', 'RFC', 'BAPI', 'Barcode System', 'Supply Chain'],
  },
];

const techArticles = [
  {
    title: 'SAP RAG Query Practice: Engineering Path from Business Data to LLM Q&A',
    description: 'RAG / LangChain / SAP Integration',
    link: '#',
  },
  {
    title: 'ABAP and Python Collaboration: Building Enterprise Finance Automatic Posting Pipeline',
    description: 'SAP BAPI / Finance Automation',
    link: '#',
  },
  {
    title: 'Enterprise Agent Performance Tuning: RAG Accuracy, Hallucination Governance and Fault Tolerance',
    description: 'AI Agent / LLM / Engineering',
    link: '#',
  },
];

const workExperience = [
  {
    company: 'Haoying New Intelligence Technology Co., Ltd. · ABAP Development / Python Development',
    period: '2025.09 — Present',
    description:
      'Responsible for core deliveries including Shenzhen McQuay intelligent BI query agent project (RAG + LangChain + SAP integration), sales claim platform (WeCom integration + SAP finance automated posting + automatic clearing), and ERP operations (FI/SD reports and batch import).',
  },
  {
    company: 'Zhejiang Zhongtuo Human Resources Co., Ltd. · ABAP Development',
    period: '2023.01 — 2025.08',
    description:
      'Responsible for Luzhou Laojiao SAP implementation project (PP/FICO/MM/SD), covering sales order enhancement, purchase inbound documents, golden tax import/export, profit reports, production planning, GSP quality archives and other module development.',
  },
  {
    company: 'Shenzhen Shi Dai Wei Yun Technology Co., Ltd. · Java Development Engineer',
    period: '2020.07 — 2022.12',
    description:
      'Responsible for supply chain management system and SAP integration (RFC bidirectional synchronization), and SAP barcode management system custom development (receipt, shipment, FIFO, location management, etc.).',
  },
];

const cardBase =
  'p-6 bg-[#FAF9F5] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm';
const cardInteractive = `${cardBase} transition hover:shadow-md`;

export default function Resume({ globalData }) {
  return (
    <Layout>
      <SEO title={`Resume - ${globalData.name}`} description={profileData.bio} />
      <Header name={globalData.name} />

      <main className="w-full">
        {/* Profile Section */}
        <section className="mb-16 text-center">
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
              Email Me
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="px-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-[#FAF9F5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            >
              Call Me
            </a>
          </div>
        </section>

        {/* Skills & Directions */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Skills & Focus</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${cardBase}`}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Core Directions</h3>
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
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Tech Stack</h3>
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
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Projects</h2>
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
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Technical Articles</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            Focusing on AI enterprise adoption, RAG engineering, SAP integration, and finance automation practices, documenting real-world reusable methods and trade-offs.
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
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Work Experience</h2>
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
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Certificates & Self Assessment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={cardBase}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Certificates</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                  Software Designer (Intermediate Professional Title)
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                  CET-6 (College English Test Band 6)
                </li>
              </ul>
            </div>
            <div className={cardBase}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Self Assessment</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  Deep research and hands-on experience with AI and Agent technologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  Strong self-learning ability and a team player
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  Positive work attitude, strong sense of responsibility, eager to help others
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                  Courageous in facing challenges and strongly achievement-driven
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
