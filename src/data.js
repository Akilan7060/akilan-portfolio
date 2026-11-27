// All content comes from Akilan's resume. Nothing here is invented.
export const profile = {
  name: 'Akilan',
  title: 'AI & Data Science Graduate',
  tagline: 'Building intelligent systems with Python, machine learning and data.',
  intro: "B.Tech Artificial Intelligence and Data Science graduate (2022–2026) with hands-on experience in machine learning, chatbots with vector search, and deep learning image classification. Published and presented research at international conferences.",
  email: 'akilanraja32@gmail.com',
  phone: '7010682816',
  location: 'Sivagangai',
  github: 'https://github.com/Akilan7060',
  githubUser: 'Akilan7060',
  resume: '/resume.pdf',
  photo: '/akilan.jpg',
}
export const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Achievements', 'Contact']
export const skills = [
  { title: 'Programming Languages', icon: 'Code2', items: ['Python', 'SQL'] },
  { title: 'Frameworks & Libraries', icon: 'Brain', items: ['NLTK', 'NumPy', 'Pandas'] },
  { title: 'Data Analysis & Visualization', icon: 'BarChart3', items: ['Excel', 'Power BI'] },
  { title: 'Used in Projects', icon: 'Layers', items: ['Django', 'PostgreSQL', 'React', 'Vite', 'Cohere LLM', 'CNN Models'] },
]
export const projects = [
  {
    title: 'KCET Bot – AI-Powered Chatbot', date: '01/2026 – 04/2026', icon: 'MessageSquare',
    desc: 'KCET Assist, an AI chatbot for KCET and college queries using Cohere LLM, with a Django PostgreSQL backend, vector search and a real-time UI in Vite React.',
    tech: ['Cohere LLM', 'Django', 'PostgreSQL', 'Vector Search', 'React', 'Vite'],
    features: ['Robust Django and PostgreSQL backend with vector-based semantic search for intelligent retrieval', 'Responsive Vite + React frontend for real-time, interactive conversations', 'Accurate, context-aware answers for prospective and current students'],
  },
  {
    title: 'Corn Leaf Disease Prediction System', date: '04/2025 – 11/2025', icon: 'Leaf',
    desc: 'An automated corn leaf disease detection system using machine learning for early diagnosis in agriculture.',
    tech: ['Machine Learning', 'Deep Learning', 'CNN', 'Image Classification'],
    features: ['CNN-based image classification for real-time identification of diseased and healthy leaves', 'End-to-end pipeline: image preprocessing, model inference and backend integration', 'Real-time predictions with data logging'],
  },
]
export const internship = {
  role: 'Machine Learning Intern', company: 'Lambda Digital', duration: '06/2024 – 07/2024 (18 days)',
  points: ['Completed an 18-day internship focused on machine learning workflows', 'Gained hands-on experience in data annotation for training ML models', 'Annotated and validated datasets for ML model training, improving model accuracy and data quality'],
  tools: ['Machine Learning', 'Data Annotation'],
}
export const education = [
  { degree: 'B.Tech in Artificial Intelligence and Data Science', school: 'Kamaraj College of Engineering and Technology', years: '2022 – 2026', detail: 'CGPA: 7.3 / 10' },
  { degree: 'Higher Secondary (HSC)', school: 'Kendriya Vidyalaya', years: '2020 – 2022', detail: 'Percentage: 65.8%' },
  { degree: 'Secondary School (SSLC)', school: 'Kendriya Vidyalaya', years: '2019 – 2020', detail: 'Percentage: 64%' },
]
export const achievements = [
  { type: 'Publication', icon: 'BookOpen', title: 'Campus Mind: A Context-Aware Conversational AI Framework', text: 'Published and presented at the International Conference on Artificial Intelligence and Smart Environments (ICAISE 2025), on intelligent academic query resolution and smart campus communication.' },
  { type: 'Conference', icon: 'Presentation', title: 'Corn Leaf Disease Prediction', text: 'Presented at ICICT 2025, Velammal Institute of Technology.' },
  { type: 'Certification', icon: 'Award', title: 'Oracle – International Java Foundation Certified', text: 'Oracle certification in Java fundamentals.' },
  { type: 'Achievement', icon: 'Keyboard', title: 'Government Typewriting Exams', text: 'Completed English Junior and Higher Grade, and Tamil Junior Grade.' },
]
