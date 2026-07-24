// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  Everything the site shows comes from this one file.
// ============================================================

export const profile = {
  name: 'Ravindu Pathirana',
  title: 'Computer Science & Engineering Undergraduate',
  tagline: 'ML & Data Science Enthusiast · University of Moratuwa',
  bio: `I'm a Computer Science & Engineering undergraduate at the University of Moratuwa with a strong passion for Software Engineering, Artificial Intelligence, Machine Learning, and Data Science. 
  I enjoy designing and developing scalable software systems alongside intelligent applications that solve real-world problems—from full-stack software solutions to AI-powered platforms, data mining, and deep learning projects. 
  My goal is to contribute to impactful AI research while developing scalable software systems.`,
  location: 'Ambalangoda, Sri Lanka',
  photo: '/profile.jpg',
  resumeUrl: null, // e.g. '/Ravindu_Pathirana_CV.pdf' (put the file in /public)
}

export const socials = {
  github: 'https://github.com/Ravindu-Pathirana',
  linkedin: 'https://www.linkedin.com/in/ravindu-pathirana-372082282',
  email: 'ravindup.23@cse.mrt.ac.lk',
  phone: '+94 760 232 880',
}

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'Machine Learning', 'Deep Learning', 'Data Mining', 'Data Analysis',
      'Predictive Modeling', 'Feature Engineering', 'Model Evaluation',
      'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Random Forest',
    ],
  },
  {
    category: 'Web Development',
    items: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'VS Code', 'Jupyter Notebook', 'Postman'],
  },
  {
    category: 'Core CS',
    items: [
      'Object-Oriented Programming', 'Database Design',
      'Data Structures & Algorithms', 'Software Engineering', 'Research & Technical Writing',
    ],
  },
]

export const projects = [
  {
    name: 'HealthWise AI',
    status: 'Ongoing',
    description:
      'An AI-powered healthcare platform that recommends personalized medical tests, analyzes laboratory reports using OCR and Large Language Models, and provides intelligent health insights and lifestyle recommendations.',
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'FastAPI', 'MongoDB', 'Python', 'OCR', 'LLMs'],
    github: '', // add repo link
    demo: '',
    featured: true,
  },
  {
    name: 'Kandypack Logistics Management System',
    status: null,
    description:
      'A railway logistics management platform featuring recurring train scheduling, template-based trip generation, and MySQL database management using raw SQL.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Java', 'SQL'],
    github: '', // add repo link
    demo: '',
    featured: true,
  },
  {
    name: 'Mental Health Prediction (ML)',
    status: null,
    description:
      'Machine learning models that predict mental health outcomes from survey data, using feature engineering and model optimization techniques.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost'],
    github: '', // add repo link
    demo: '',
    featured: true,
  },
  {
    name: 'MyPOS',
    status: null,
    description:
      'A Point-of-Sale software built for hardware businesses, handling inventory, billing and sales workflows.',
    tech: ['Java', 'Software Engineering', 'Database Design'],
    github: 'https://github.com/Ravindu-Pathirana/Mypos',
    demo: '',
    featured: false,
  },
]

export const education = [
  {
    school: 'University of Moratuwa',
    degree: 'B.Sc. in Computer Science & Engineering',
    period: 'Current',
    detail:
      'Focus areas: Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Data Mining, and Software Engineering.',
  },
]

export const researchInterests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Healthcare AI',
  'Data Science',
  'Computer Vision',
  'Large Language Models',
  'Open Source Development',
]

// Add real certificates here later. Leave empty [] to hide the section.
export const certifications = [
  // { name: 'Machine Learning Specialization', issuer: 'Coursera / DeepLearning.AI', year: '2025', url: '' },
]

export const careerObjective =
  "I'm seeking opportunities to apply AI and software engineering to solve meaningful real-world problems while contributing to innovative research and industry projects. I'm particularly interested in Machine Learning Engineering, AI Research, Data Science, and Full-Stack Software Development."
