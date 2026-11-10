import React, { createContext, useContext, useState, useEffect } from "react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "AI & GenAI" | "Machine Learning" | "Engineering & Web";
  highlight?: string;
  description: string;
  image?: string;
  videoUrl?: string;
  tags: string[];
  github?: string;
  link?: string;
  featured?: boolean;
}

export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  detail: string;
  href: string;
  status?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface ProfileTrack {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  keySkills: string[];
  resumeUrl: string;
  resumeFileName: string;
  statusBadge: string;
}

export interface PersonalInfo {
  name: string;
  roles: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  mtechTitle: string;
  mtechCollege: string;
  mtechYear: string;
  mtechCgpa: string;
  btechTitle: string;
  btechCollege: string;
  btechYear: string;
  gateScore: string;
  currentMissionTitle: string;
  currentMissionOrg: string;
  currentMissionDetails: string;
  aboutBio: string[];
  lastUpdated: string;
  baseVisitorCount: number;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  profileTracks: ProfileTrack[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  skills: { label: string; skills: string[] }[];
}

export const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "Komendra Sahu",
    roles: "AI Engineer • ML Engineer • Forward Deployed Engineer",
    headline: "I build and deploy production AI platforms that deliver real-world impact.",
    location: "Raipur, India",
    email: "sahukomendra721@gmail.com",
    linkedin: "https://www.linkedin.com/in/komendrasahu",
    github: "https://github.com/Komu12ee",
    mtechTitle: "M.Tech in Data Science & Artificial Intelligence",
    mtechCollege: "IIIT Naya Raipur",
    mtechYear: "2025 – 2027",
    mtechCgpa: "9.16",
    btechTitle: "B.Tech in Computer Science & Engineering",
    btechCollege: "Govt. Engineering College, Raipur",
    btechYear: "2021 – 2025",
    gateScore: "585",
    currentMissionTitle: "Current Mission",
    currentMissionOrg: "CMIT Fellow @ Dept. of Electronics & IT, Govt. of Chhattisgarh",
    currentMissionDetails: "Deploying GenAI platforms on Linux VMs & NVIDIA H100 GPUs (Yotta Cloud) • Hosting CG-AIM Portal",
    aboutBio: [
      "I am a CMIT Fellow with the Department of Electronics & IT, Government of Chhattisgarh (deployed with CHiPS), and currently pursuing an M.Tech in Data Science & Artificial Intelligence at IIIT Naya Raipur (CGPA: 9.16).",
      "I specialize in building and deploying production AI platforms: capturing mission requirements directly from government departments, integrating APIs and model services, deploying on Linux VMs and NVIDIA H100 GPUs (Yotta cloud), and resolving live issues. My work includes CHiPS-RAG (a bilingual Hindi/English document assistant across 3 department instances), developing and hosting the official Chhattisgarh AI Mission (CG-AIM) platform, an end-to-end legal-intelligence RTI Assistant, and the statewide Seva Mera Yogdaan Utsav platform across all 33 districts.",
      "My research in retrieval-augmented generation and scalable big data has been published in IEEE Xplore and accepted across ICST and ICTIS 2026 conferences.",
      "Beyond tech, I'm a district-level basketball player, which has instilled in me deep teamwork, discipline, and agile execution under pressure.",
    ],
    lastUpdated: "November 10, 2026",
    baseVisitorCount: 1380,
  },
  profileTracks: [
    {
      id: "ai-engineer",
      title: "AI Engineer",
      subtitle: "GenAI Architectures, RAG Systems & LLM Services",
      badge: "GenAI & LLMs",
      description:
        "Specialized in architecting and deploying end-to-end GenAI systems: bilingual RAG pipelines, dense+sparse hybrid retrieval with RRF reranking, Qwen VLM OCR, and multi-provider LLM integrations with resilient failovers.",
      highlights: [
        "Built CHiPS-RAG: multi-department bilingual (Hindi/English) document assistant with isolated corpora, vector stores, and RBAC.",
        "Architected legal-intelligence RTI Assistant with query routing (PostgreSQL/Qdrant/Hybrid) and source-grounded citations.",
        "Integrated GPU-accelerated VLM OCR (Qwen VLM), Sarvam LLM, STT/TTS APIs, and self-hosted models via OpenAI-compatible endpoints.",
      ],
      keySkills: ["RAG & Hybrid Retrieval", "LangChain", "BGE-M3 Reranking", "vLLM", "Qwen VLM / OCR", "Qdrant", "Prompt Engineering"],
      resumeUrl: "/ai-engineer-resume.pdf",
      resumeFileName: "Komendra-Sahu-AI-Engineer-Resume.pdf",
      statusBadge: "Active Track",
    },
    {
      id: "ml-engineer",
      title: "ML Engineer",
      subtitle: "Applied Machine Learning, Predictive Modeling & Big Data",
      badge: "Applied ML & Data",
      description:
        "Focusing on statistical machine learning, recommendation systems, NLP text complexity analytics, and high-throughput big data pipelines on distributed Spark/YARN clusters.",
      highlights: [
        "Created the Corporate Communication Text Complexity Index (CCTI) over 200K+ SEC filings with Random Forest outperforming sentiment baselines.",
        "Engineered 100M-scale click fraud detection pipeline on 2-node YARN clusters with eager checkpointing, achieving 0.9058 ROC-AUC.",
        "Built EduPro student segmentation & collaborative filtering recommender (PCA, K-Means, SVD; Silhouette Score 0.633).",
      ],
      keySkills: ["PyTorch", "Scikit-learn", "Apache Spark / YARN", "NLP Analytics", "Random Forest", "PCA / SVD / K-Means", "Pandas & NumPy"],
      resumeUrl: "/ml-engineer-resume.pdf",
      resumeFileName: "Komendra-Sahu-ML-Engineer-Resume.pdf",
      statusBadge: "Active Track",
    },
    {
      id: "forward-deployed-engineer",
      title: "Forward Deployed Engineer",
      badge: "Production Deployment & Cloud GPUs",
      subtitle: "Client Delivery, Linux/H100 GPU Operations & Mission Platforms",
      description:
        "Embedded with government and enterprise stakeholders to translate mission requirements into deployed production AI: managing NVIDIA H100 GPUs (Yotta cloud), Nginx proxies, vLLM endpoints, DPR consulting, and 24/7 reliability.",
      highlights: [
        "Full delivery ownership from departmental data onboarding to live 24/7 production support for Chhattisgarh government departments.",
        "Deployed & operated services on Linux VMs and NVIDIA H100 GPUs (Yotta cloud): Nginx reverse proxy, Node.js gateway, Flask API, and vLLM endpoints.",
        "Developed & hosted the official Chhattisgarh AI Mission (CG-AIM) platform, supported Sericulture & PHED departments on DPRs, and built 'Seva Mera Yogdaan' platform across all 33 districts (540+ seva drives).",
      ],
      keySkills: ["NVIDIA H100 (Yotta Cloud)", "vLLM Endpoints", "Linux & systemd", "Nginx Proxy", "Client Requirement Scoping", "Prometheus", "DPR Advisory"],
      resumeUrl: "/forward-deployed-engineer-resume.pdf",
      resumeFileName: "Komendra-Sahu-Forward-Deployed-Engineer-Resume.pdf",
      statusBadge: "Featured Resume (FDE-K)",
    },
  ],
  projects: [
    {
      id: "chips-rti",
      title: "CHiPS RTI Assistant – Legal RAG & PIO Advisory System",
      category: "AI & GenAI",
      featured: true,
      highlight: "Deployed for Govt. of Chhattisgarh",
      description:
        "End-to-end assistant for Chhattisgarh RTI workflows with role-based access for citizens, PIOs, and administrators. An intelligent query router (PostgreSQL / Qdrant / Hybrid) directs officer-directory lookups to structured data and legal questions to dense+sparse retrieval with cited source PDFs and precedent expansion. Includes PIO advisory pipelines, evaluation center, Prometheus metrics, and automated test suites.",
      tags: ["Python", "Flask", "Node.js", "Qdrant", "PostgreSQL", "BGE-M3", "vLLM"],
      github: "https://github.com/Komu12ee",
    },
    {
      id: "chips-rag",
      title: "CHiPS-RAG – Multi-Department Document Assistant",
      category: "AI & GenAI",
      featured: true,
      highlight: "3 Government Department Instances",
      description:
        "Ingestion-to-answer GenAI pipeline serving CHiPS, Finance, and General Administration with isolated corpora. Features automated web scraping, GPU-accelerated Qwen VLM OCR with a text-quality gate, structure-preserving chunking, hybrid dense+sparse retrieval with Reciprocal Rank Fusion (RRF), optional BGE reranking, and citation-grounded answers.",
      tags: ["Python", "Flask", "Node.js", "Qdrant", "BGE-M3", "Qwen VLM", "pgvector", "Nginx"],
    },
    {
      id: "cg-aim",
      title: "Chhattisgarh AI Mission (CG-AIM) – Official Platform",
      category: "Engineering & Web",
      featured: true,
      highlight: "Official Govt. of Chhattisgarh AI Portal",
      description:
        "Designed, developed, and hosted the official digital platform for the Chhattisgarh AI Mission (CG-AIM) under the Department of Electronics & IT, Government of Chhattisgarh. Configured production Linux hosting, Nginx web server, and IP routing to showcase state AI initiatives, departmental DPR frameworks, and GenAI use cases to citizens and leadership.",
      tags: ["Govt. of Chhattisgarh", "Web Architecture", "Linux Hosting", "Nginx", "CG-AIM"],
      link: "http://103.51.8.67/cg-aim",
    },
    {
      id: "seva-mera-yogdaan",
      title: "Seva Mera Yogdaan Utsav – Statewide Giving Platform",
      category: "Engineering & Web",
      featured: true,
      highlight: "540+ Drives Across 33 Districts • CM Instagram",
      description:
        "Official statewide civic and festival of giving platform (2–8 October) developed for the Government of Chhattisgarh. Engineered a role-based architecture (citizen, NGO, district admin, super admin) managing donation listings, volunteer drives, 174 onboarded organizations, and audit logs across all 33 districts. Featured on the Hon’ble Chief Minister's official Instagram account.",
      tags: ["Govt. of Chhattisgarh", "Laravel", "PHP", "MySQL", "Tailwind CSS", "Enterprise Architecture"],
      link: "https://sevamerayogdaan.cgstate.gov.in/",
    },
    {
      id: "ccti-analytics",
      title: "Financial Text Complexity Analytics (NLP & ML)",
      category: "Machine Learning",
      featured: true,
      highlight: "Evaluated over 200,000+ SEC Filings",
      description:
        "Engineered the Corporate Communication Text Complexity Index (CCTI) over 200K+ corporate SEC disclosures and trained a Random Forest model to link textual complexity to stock returns, outperforming traditional sentiment-based baselines.",
      tags: ["Python", "FastAPI", "React", "Random Forest", "NLP", "Financial Analytics"],
      github: "https://github.com/Komu12ee",
    },
    {
      id: "edge-traffic",
      title: "Edge–Cloud AI Traffic Monitoring System",
      category: "AI & GenAI",
      featured: false,
      description:
        "A real-time Edge AI traffic analytics system performing high-speed vehicle detection and traffic analysis on an edge GPU, while asynchronously streaming lightweight analytics to a cloud-hosted backend for live visualization.",
      tags: ["Python", "YOLOv8", "Flask", "React", "CUDA", "Edge AI"],
    },
    {
      id: "edupro",
      title: "EduPro Student Segmentation & Recommender",
      category: "Machine Learning",
      featured: false,
      highlight: "Silhouette Score: 0.633",
      description:
        "Built a student segmentation and hybrid course recommender using PCA, K-Means clustering, and SVD-based collaborative filtering during Machine Learning internship at Unified Mentor.",
      tags: ["Python", "Scikit-learn", "PCA", "K-Means", "SVD", "Recommendation Systems"],
    },
    {
      id: "titanic",
      title: "Titanic Survival Predictor",
      category: "Machine Learning",
      featured: false,
      description:
        "Predicts the probability of survival of Titanic passengers using machine learning, based on features like age, gender, class, and family aboard. Built with Python, scikit-learn, and Flask for a web interface.",
      tags: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
    },
    {
      id: "maths-marks",
      title: "Maths Marks Predictor",
      category: "Machine Learning",
      featured: false,
      description:
        "Student marks prediction project using machine learning algorithms to forecast student performance based on various academic and demographic factors.",
      tags: ["Python", "ML", "Data Analysis", "Predictive Modeling"],
    },
    {
      id: "primoday",
      title: "Primoday Corporate Website Redesign",
      category: "Engineering & Web",
      featured: false,
      description:
        "Complete redesign of their corporate website and platform with modern UI/UX principles and enhanced functionality.",
      tags: ["Web Design", "Corporate", "UI/UX", "Redesign"],
    },
    {
      id: "nextlite",
      title: "Nextlite Video Editing Web App",
      category: "Engineering & Web",
      featured: false,
      description:
        "Created a custom video editing and upload web application with intuitive interface and powerful editing capabilities.",
      tags: ["Web App", "Video Editing", "React", "Media Processing"],
    },
    {
      id: "syncnow",
      title: "SyncNow Corporate Websites",
      category: "Engineering & Web",
      featured: false,
      description:
        "Developed multiple corporate websites with focus on performance, SEO, and modern design principles.",
      tags: ["Corporate", "Web Development", "SEO", "Performance"],
    },
  ],
  experience: [
    {
      id: "cmit-fellow",
      role: "CMIT Fellow",
      organization: "Dept. of Electronics & IT, Govt. of Chhattisgarh (deployed with CHiPS)",
      period: "Present",
      points: [
        "Work directly with Chhattisgarh government departments to turn their requirements into deployed GenAI solutions, owning delivery from data onboarding to production support.",
        "Built CHiPS-RAG, a bilingual (Hindi/English) document assistant serving three department instances (CHiPS, Finance, General Administration), each with isolated corpus, vector store, login scope, and API keys.",
        "Deployed and operated services on Linux VMs and NVIDIA H100 GPUs (Yotta cloud): Nginx reverse proxy, Node.js/Express gateway, Flask API, and vLLM OpenAI-compatible endpoints serving the LLM and VLM-based OCR; diagnose 502s, port/firewall and model-endpoint failures via logs and health checks.",
        "Developed and hosted the official web platform for the Chhattisgarh AI Mission (CG-AIM) for the Government of Chhattisgarh, and supported Sericulture and PHED departments in preparing their Detailed Project Reports (DPRs) for CG-AIM.",
        "Integrated external APIs (Sarvam LLM, speech-to-text, text-to-speech) and self-hosted models behind configurable provider settings, with fallbacks for when a service is unavailable.",
        "Built the digital platform for 'Seva Mera Yogdaan Utsav' (2–8 Oct): 540+ seva drives across all 33 districts, 174 organizations onboarded; featured on the Hon’ble Chief Minister’s official Instagram account.",
      ],
    },
    {
      id: "unified-mentor",
      role: "Machine Learning Intern",
      organization: "Unified Mentor · Remote",
      period: "Jan 2026 – Apr 2026",
      points: [
        "Built a student segmentation and hybrid course recommender (PCA, K-Means, SVD; Silhouette Score 0.633) for the EduPro platform.",
        "Applied clustering and matrix factorization techniques to deliver personalized learning paths based on learner engagement metrics.",
      ],
    },
  ],
  publications: [
    {
      id: "pub-rag-fusion",
      title: "Dynamic Query Handling with RAG Fusion for PDF-Based Knowledge Retrieval Systems",
      venue: "IEEE Xplore, 2025",
      detail: "Retrieval-augmented framework for document understanding and query handling over unstructured PDFs.",
      href: "https://ieeexplore.ieee.org/abstract/document/11070378",
      status: "Published",
    },
    {
      id: "pub-click-fraud",
      title: "Optimization of 100M-Scale Click Fraud Detection Pipelines on Resource-Constrained 2-Node YARN Clusters",
      venue: "ICST 2026 - Accepted",
      detail: "Apache Spark/YARN pipeline for 100M records; achieved ROC-AUC 0.9058 with Random Forest.",
      href: "https://drive.google.com/file/d/1aEeAZF1NQUDrDOS35Mi1zpLmTygY6neX/view?usp=sharing",
      status: "Accepted",
    },
    {
      id: "pub-ccti",
      title: "Nonlinear Effects of Text Complexity in Corporate Disclosures (CCTI)",
      venue: "ICTIS 2026 - Accepted",
      detail: "Established nonlinear links between disclosure complexity and stock returns using Random Forest models.",
      href: "https://drive.google.com/file/d/19RBirDyRtUM2-KO5GM4iu6bR1ZVIUXRi/view?usp=sharing",
      status: "Accepted",
    },
    {
      id: "pub-meta-rl",
      title: "Shift-Aware Meta-Reinforcement Learning for Robust Auto-Scaling in Serverless Clouds",
      venue: "ICTIS 2026 - Accepted",
      detail: "Proposed KL-divergence shift detection integrated with Meta-PPO for adaptive autoscaling.",
      href: "https://drive.google.com/file/d/1xY6dMJu-7HK_DoldoBxtgwB4Hml10mWL/view?usp=sharing",
      status: "Accepted",
    },
  ],
  skills: [
    {
      label: "Generative AI & LLMs",
      skills: ["RAG", "Hybrid Retrieval", "RRF & Reranking (BGE-M3)", "LangChain", "LLM Fine-Tuning", "OCR / Qwen VLM", "Sarvam APIs (STT/TTS)", "Prompt Engineering"],
    },
    {
      label: "Deployment & Infrastructure",
      skills: ["Linux VMs", "NVIDIA H100 GPUs (Yotta Cloud)", "vLLM", "Nginx Reverse Proxy", "systemd", "Docker", "Git", "Prometheus Metrics"],
    },
    {
      label: "Languages & Frameworks",
      skills: ["Python", "SQL", "JavaScript (Node.js/Express)", "PHP (Laravel)", "FastAPI", "Flask", "React", "Tailwind CSS"],
    },
    {
      label: "Databases & Vector Stores",
      skills: ["PostgreSQL (pgvector)", "Qdrant", "MySQL", "Pandas", "NumPy"],
    },
    {
      label: "Machine Learning & Core",
      skills: ["Scikit-learn", "PyTorch", "Random Forest", "Clustering (PCA, K-Means)", "Collaborative Filtering (SVD)", "NLP", "YOLOv8", "Pytest & Node Suites"],
    },
  ],
};

const STORAGE_KEY = "portfolio_admin_custom_data_v1";

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: PortfolioData) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  addProject: (project: Omit<ProjectItem, "id">) => void;
  deleteProject: (id: string) => void;
  updateExperience: (id: string, exp: Partial<ExperienceItem>) => void;
  updatePublication: (id: string, pub: Partial<PublicationItem>) => void;
  addPublication: (pub: Omit<PublicationItem, "id">) => void;
  deletePublication: (id: string) => void;
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonStr: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...defaultPortfolioData, ...parsed };
        }
      } catch (err) {
        console.error("Failed to load portfolio data from localStorage", err);
      }
    }
    return defaultPortfolioData;
  });

  const save = (newData: PortfolioData) => {
    setData(newData);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      } catch (err) {
        console.error("Failed to save portfolio data to localStorage", err);
      }
    }
  };

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    save({
      ...data,
      personalInfo: { ...data.personalInfo, ...info },
    });
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    const updatedProjects = data.projects.map((p) => (p.id === id ? { ...p, ...updated } : p));
    save({ ...data, projects: updatedProjects });
  };

  const addProject = (project: Omit<ProjectItem, "id">) => {
    const newProj: ProjectItem = {
      ...project,
      id: "proj-" + Date.now(),
    };
    save({ ...data, projects: [newProj, ...data.projects] });
  };

  const deleteProject = (id: string) => {
    save({ ...data, projects: data.projects.filter((p) => p.id !== id) });
  };

  const updateExperience = (id: string, exp: Partial<ExperienceItem>) => {
    const updatedExp = data.experience.map((e) => (e.id === id ? { ...e, ...exp } : e));
    save({ ...data, experience: updatedExp });
  };

  const updatePublication = (id: string, pub: Partial<PublicationItem>) => {
    const updatedPubs = data.publications.map((p) => (p.id === id ? { ...p, ...pub } : p));
    save({ ...data, publications: updatedPubs });
  };

  const addPublication = (pub: Omit<PublicationItem, "id">) => {
    const newPub: PublicationItem = {
      ...pub,
      id: "pub-" + Date.now(),
    };
    save({ ...data, publications: [newPub, ...data.publications] });
  };

  const deletePublication = (id: string) => {
    save({ ...data, publications: data.publications.filter((p) => p.id !== id) });
  };

  const resetToDefaults = () => {
    save(defaultPortfolioData);
  };

  const exportJSON = () => {
    return JSON.stringify(data, null, 2);
  };

  const importJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.personalInfo) {
        save({ ...defaultPortfolioData, ...parsed });
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON data", e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData: save,
        updatePersonalInfo,
        updateProject,
        addProject,
        deleteProject,
        updateExperience,
        updatePublication,
        addPublication,
        deletePublication,
        resetToDefaults,
        exportJSON,
        importJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

