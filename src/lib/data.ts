export const profile = {
  name: "Paramveer Singh",
  title: "B.Tech CSE Student | Data Science Specialist",
  introduction:
    "A passionate and driven Computer Science student with a specialization in Data Science. I am dedicated to leveraging data to solve complex problems and am proficient in AI, Machine Learning, and Deep Learning technologies. I am always eager to learn and apply new skills to real-world challenges.",
  photo: "profile-photo",
};

export const contact = {
  email: "paramveer@example.com",
  linkedin: "https://www.linkedin.com/in/paramveer-singh-169b1034b",
  github: "https://github.com/gitcoderuser1230/gitcoderuser1230",
  twitter: "https://twitter.com",
};

export const skills = {
  "Artificial Intelligence": [
    "Natural Language Processing",
    "Computer Vision",
    "Recommender Systems",
    "LLMs",
  ],
  "Data Science": [
    "Data Analysis",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
  ],
  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "TensorFlow",
    "PyTorch",
    "Keras",
  ],
  "Deep Learning": [
    "Convolutional Neural Networks (CNN)",
    "Recurrent Neural Networks (RNN)",
    "Generative Adversarial Networks (GAN)",
    "Transformers",
  ],
};

const sem1CGPA = 8.15;
const sem2CGPA = 8.06;

export const education = [
  {
    course: "Bachelor of Technology in Computer Science & Engineering",
    specialization: "Data Science",
    institution: "Chandigarh Group of Colleges, Landran, Punjab",
    duration: "2024 - 2028",
    cgpa: ((sem1CGPA + sem2CGPA) / 2).toFixed(2),
    cgpaNote: "(till 2nd semester)",
    semesters: [
      { semester: "1", cgpa: sem1CGPA },
      { semester: "2", cgpa: sem2CGPA },
      { semester: "3", cgpa: null },
      { semester: "4", cgpa: null },
      { semester: "5", cgpa: null },
      { semester: "6", cgpa: null },
      { semester: "7", cgpa: null },
      { semester: "8", cgpa: null },
    ]
  },
];

export const projects: any[] = [];
