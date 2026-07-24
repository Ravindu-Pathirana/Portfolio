// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  Everything the site shows comes from this one file.
// ============================================================

export const profile = {
  name: "Ravindu Pathirana",
  title: "Computer Science & Engineering Undergraduate",
  tagline: "ML & Data Science Enthusiast · University of Moratuwa",
  bio: `I'm a Computer Science & Engineering undergraduate at the University of Moratuwa with a strong passion for Software Engineering, Artificial Intelligence, Machine Learning, and Data Science. 
  I enjoy designing and developing scalable software systems alongside intelligent applications that solve real-world problems—from full-stack software solutions to AI-powered platforms, data mining, and deep learning projects. 
  My goal is to contribute to impactful AI research while developing scalable software systems.`,
  location: "Ambalangoda, Sri Lanka",
  photo: "/profile.jpg",
  resumeUrl: null, // e.g. '/Ravindu_Pathirana_CV.pdf' (put the file in /public)
};

export const socials = {
  github: "https://github.com/Ravindu-Pathirana",
  linkedin: "https://www.linkedin.com/in/ravindu-pathirana-372082282",
  email: "ravindup.23@cse.mrt.ac.lk",
  phone: "+94 760 232 880",
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "C++", "C"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Data Mining",
      "Data Analysis",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Random Forest",
    ],
  },
  {
    category: "Web Development",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "IntelliJ IDEA",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
    ],
  },
  {
    category: "Core CS",
    items: [
      "Object-Oriented Programming",
      "Database Design",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Research & Technical Writing",
    ],
  },
];

export const projects = [
  {
    name: "Audio LIT",
    status: "Ongoing",
    description:
      "A high-performance, full-stack interpretability workbench designed for multi-task Explainable AI (XAI) speech modeling, synthetic voice deepfake detection, localized counterfactual waveform mutations, and demographic bias auditing.",
    tech: [
      "Python 3.10+",
      "FastAPI",
      "Uvicorn",
      "Celery",
      "Redis",
      "PyTorch",
      "Hugging Face Transformers",
      "Captum",
      "Librosa",
      "Torchaudio",
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Plotly/D3",
    ],
    github: "https://github.com/AudioLIT-DSE-Project",
    demo: "",
    featured: true,
  },
  {
    name: "Chest X-Ray Disease Detection",
    status: "ongoing",
    description:
      "This project develops an AI-assisted diagnosis system that automatically classifies chest X-ray images and explains its predictions using Explainable AI.",
    tech: [
      "ResNet-50",
      "DenseNet-121",
      "EfficientNet-B0",
      "Vit-Base/16",
      "PyTorch",
      "Captum",
      "Grad-CAM",
      "Seaborn",
      "Pandas",
      "numpy",
      "Integrated Gradients",
      "LIME",
      "SHAP",
      "Git",
      "Colab",
      "Kaggle",
    ],
    github:
      "https://github.com/Ravindu-Pathirana/Chest-X-ray-Disease-Detection.git",
    demo: "",
    featured: true,
  },
  {
    name: "Predicting Malnutrition Hotspots",
    status: "",
    description:
      "This is a Data Science Research Project. We are developping a data-driven framework to identify and predict malnutrition hotspots using food accessibility and socioeconomic indicators.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Geopandas",
    ],
    github:
      "https://github.com/Ravindu-Pathirana/Predicting_Malnutrition_Hotspots.git",
    demo: "",
    featured: true,
  },
  {
    name: "Fake News Detection with Explainable AI",
    status: null,
    description:
      "Explainable Fake News Detection system developed using classical machine learning techniques and evaluated on the LIAR benchmark dataset. The project focuses not only on improving classification performance but also on enhancing model interpretability using Explainable AI (XAI) methods.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost"],
    github: "https://github.com/Ravindu-Pathirana/Fake-News-Detection.git",
    demo: "",
    featured: true,
  },
  {
    name: "MyPOS",
    status: "ongoing",
    description:
      "Built a full-stack Point of Sale (POS) and Inventory Management System designed for retail businesses, featuring purchasing, sales, inventory, customer, supplier, expense, banking, and payment management in a single platform. Engineered advanced inventory features including FIFO stock management, batch tracking, credit sales with partial payments, and comprehensive business reporting for real-time operational insights.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Software Engineering",
      "Database Design",
    ],
    github: "https://github.com/Ravindu-Pathirana/Mypos",
    demo: "",
    featured: false,
  },
  {
    name: "OnTime - Railway Ticket & Schedule Management System",
    status: null,
    description:
      "A full-stack railway ticket booking and schedule management platform that streamlines train operations, reservations, recurring timetable generation, and passenger management. Built with a scalable architecture featuring a React frontend, FastAPI backend, and MySQL database, the system automates schedule generation while providing secure, high-performance APIs and an intuitive user experience.",
    tech: ["React", "FastAPI", "Python", "MySQL", "Tailwind CSS"],
    github: "https://github.com/OnTime-SE-G",
    demo: "",
    featured: true,
  },
  {
    name: "Kandypack Logistics Management System",
    status: null,
    description:
      "A railway logistics management platform featuring recurring train scheduling, template-based trip generation, and MySQL database management using raw SQL.",
    tech: ["FastAPI", "React", "MySQL", "TypeScript", "SQL"],
    github:
      "https://github.com/Ravindu-Pathirana/Kandypack-Logistics-Project.git", // add repo link
    demo: "",
    featured: true,
  },
];

export const education = [
  {
    school: "University of Moratuwa",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2024 - Current",
    detail:
      "Focus areas: Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Data Mining, and Software Engineering.",
  },
  {
    school: "Dharmasoka College, Ambalangoda",
    degree: "Grade 1 to 13",
    period: "2009 - 2022",
    detail:
      "Completed G.C.E. Advanced Level (A/L) in 2022 with a focus on Mathematics, Physics, and Chemistry. Achieved AAA's in the A/L examination with  z-score of 2.6102 with Island Rank-136. Complete G.C.E. Ordinary Level (O/L) in 2019 with 9As.",
  },
  {
    school: "Aquinas College of Higher Studies, Colombo 05",
    degree: "Diploma in English Language and English Literature",
    period: "2023",
    detail:
      "Completed Intermediate Level Diploma in English Language and English Literature with a focus on advanced grammar, academic writing, and literary analysis.",
  },
];

export const researchInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Healthcare AI",
  "Data Science",
  "Computer Vision",
  "Large Language Models",
  "Open Source Development",
];

export const certifications = [
  {
    name: "The Cambridge English A2 Key (KET) Certificate",
    issuer: "British Council, Colombo 07",
    year: "2016",
    url: "",
  },
  {
    name: "The Cambridge English B2 First (PET) Certificate",
    issuer: "British Council, Colombo 07",
    year: "2017",
    url: "",
  },
  { name: "Data Cleaning", issuer: "Kaggle", year: "2026", url: "" },
  { name: "Feature Engineering", issuer: "Kaggle", year: "2026", url: "" },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    year: "2026",
    url: "",
  },
  { name: "Pandas", issuer: "Kaggle", year: "2026", url: "" },
  {
    name: "AWS Cloud Essentials",
    issuer: "Coursera",
    year: "Current",
    url: "",
  },
];

//competitions/hackathons.
export const competitions = [
  {
    name: "Launch26",
    event: "National-Level Inter-University Hackathon",
    result: "Second Runners-up ",
    year: "2026",
    description:
      "Buid a Machine Learning-based inter planetory data communication system to transmit data from one planet to another planet with minimal loss and latency.",
    url: "",
  },
  {
    name: "IEEE Xtreme 19.0",
    event: "Hackathon",
    result: "Participation",
    year: "2025",
    description: "",
    url: "",
  },
  {
    name: "Mora Xtreme 10.0",
    event: "Hackathon",
    result: "Participation",
    year: "2025",
    description: "",
    url: "",
  },
  {
    name: "Octwave 2.0",
    event: "Hackathon",
    result: "Participation",
    year: "2025",
    description:
      "AI/ML Initiative Organized by the IEEE IAS Student Branch Chapter of University of Moratuwa",
    url: "",
  },
];

//volunteering experience here.
export const volunteering = [
  {
    role: "Co-Chair of Kowul Wasanthaya Project",
    organization: "Rotaract Club of University of Moratuwa",
    period: "2025",
    description:
      "Led a team of volunteeers of the Rotaract Club of University of Moratuwa to organize the Kowul Wasanthaya Project, a New Year celebration event for the collegues of the University of Moratuwa, which included fun activities, games, and a memorable experience.",
  },
  {
    role: "Member of Technical Committee",
    organization: "IEEE Student Branch of University of Moratuwa",
    period: "2025",
    description: "Gammaddata IEEE API 4.0 - 2025",
  },
];
// Sliding gallery shown just before Contact — certificates, competition
// photos, volunteering moments, whatever you want to show off visually.
export const gallery = [
  { src: "/gallery/image_1.jpg", caption: "Gammadda-volunteering" },
  { src: "/gallery/image_2.jpg", caption: "IEEE Xtreme 19.0" },
  { src: "/gallery/image_3.jpg", caption: "Mora Xtreme 10.0" },
  { src: "/gallery/image_4.jpg", caption: "Octwave 2.0" },
  { src: "/gallery/image_5.jpg", caption: "launch26" },
];

export const careerObjective =
  "I'm seeking opportunities to apply AI and software engineering to solve meaningful real-world problems while contributing to innovative research and industry projects. I'm particularly interested in Machine Learning Engineering, AI Research, Data Science, and Full-Stack Software Development.";
