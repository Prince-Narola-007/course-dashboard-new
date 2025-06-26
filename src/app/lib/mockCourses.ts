import { Course } from "@/app/types/course";

export const mockCourses: Course[] = [
  {
    title: "Introduction to Artificial Intelligence",
    code: "CS-101-AI1",
    semester: "Winter 2022",
    status: "open",
    thumbnail: "/images/course1.jpg",
    description:
      "This course introduces the core concepts of Artificial Intelligence, including intelligent agents, machine learning, and natural language processing. You'll explore real-world applications like self-driving cars and chatbots. Learn how machines can mimic human decision-making and improve over time. No prior AI experience is needed, but basic programming knowledge is recommended.",
    isFavorite: false,
    id: "1",
  },
  {
    title: "Data Structures and Algorithms",
    code: "CS-201-DSA2",
    semester: "Spring 2023",
    status: "closed",
    thumbnail: "/images/course2.jpg",
    description:
      "Master essential computer science concepts like arrays, stacks, queues, trees, and graphs. This course helps you understand algorithmic thinking and solve coding problems efficiently. It’s ideal for technical interviews and competitive programming. The focus is on writing optimized code and analyzing time and space complexity for real-world scenarios.",
    isFavorite: false,
    id: "2",
  },
  {
    title: "Web Development Basics",
    code: "WD-110-WEB3",
    semester: "Winter 2022",
    status: "open",
    thumbnail: "/images/course3.jpg",
    description:
      "Learn how to build and style interactive web pages using HTML, CSS, and JavaScript. This beginner-friendly course walks you through building a personal portfolio website step-by-step. You'll understand how the web works, how to link pages, create responsive designs, and make elements interactive. Perfect for newcomers with no coding background.",
    isFavorite: false,
    id: "3",
  },
  {
    title: "Database Management Systems",
    code: "DB-310-DBM4",
    semester: "Summer 2021",
    status: "closed",
    thumbnail: "/images/course4.jpg",
    description:
      "This course teaches how to model, design, and manage databases using SQL and ER diagrams. You'll learn relational theory, normalization, transactions, and indexing. Real-world examples include e-commerce and user management systems. Gain experience working with tools like MySQL and PostgreSQL to query, insert, and secure data effectively.",
    isFavorite: false,
    id: "4",
  },
  {
    title: "Cloud Computing Essentials",
    code: "CC-420-CLD5",
    semester: "Monsoon 2023",
    status: "open",
    thumbnail: "/images/course5.jpeg",
    description:
      "Understand how cloud computing transforms modern IT infrastructure. You'll study service models (IaaS, PaaS, SaaS), deployment types (public, private, hybrid), and explore leading platforms like AWS, Azure, and GCP. Learn about cloud storage, auto-scaling, cost efficiency, and security considerations in real-world cloud environments.",
    isFavorite: false,
    id: "5",
  },
  {
    title: "Cybersecurity Fundamentals",
    code: "SEC-330-CYB6",
    semester: "Autumn 2022",
    status: "closed",
    thumbnail: "/images/course6.jpg",
    description:
      "Explore the world of cybersecurity with topics like ethical hacking, cryptography, malware, firewalls, and secure coding practices. Understand how cyberattacks happen and how to defend against them. The course covers both theoretical foundations and hands-on lab simulations. It’s ideal for anyone interested in becoming a cybersecurity professional.",
    isFavorite: false,
    id: "6",
  },
  {
    title: "AI Engineering",
    code: "AI-589-BLD5",
    semester: "Summer 2024",
    status: "open",
    thumbnail: "/images/course7.jpg",
    description:
      "This advanced course dives into building real-world AI systems using tools like TensorFlow, PyTorch, and OpenAI APIs. Topics include model training, deployment, scalability, and ethical AI. You'll work on projects like chatbots, recommendation engines, and image classification apps. Ideal for developers ready to bring AI into production.",
    isFavorite: false,
    id: "7",
  },
  {
    title: "UI UX Design",
    code: "UI-382-UX96",
    semester: "Autumn 2021",
    status: "closed",
    thumbnail: "/images/course8.jpg",
    description:
      "Learn the fundamentals of user interface and user experience design, including wireframing, prototyping, and usability testing. This course covers design tools like Figma and Adobe XD. Understand how to create user-centered products that are both functional and visually appealing. Ideal for aspiring designers and frontend developers.",
    isFavorite: false,
    id: "8",
  },
  {
    title: "Web Development with React",
    code: "CS-301-WDR3",
    semester: "Fall 2023",
    status: "open",
    thumbnail: "/images/course9.jpeg",
    description:
      "Learn to build fast, dynamic, and responsive web applications using React. This course covers hooks, state management, routing, and component architecture. You’ll create several hands-on projects including a weather app and a to-do manager. Prior knowledge of JavaScript is required.",
    isFavorite: false,
    id: "9",
  },
  {
    title: "Database Management Systems",
    code: "CS-210-DB4",
    semester: "Winter 2023",
    status: "open",
    thumbnail: "/images/course10.jpg",
    description:
      "Dive into the fundamentals of relational databases, SQL, and data modeling. Topics include normalization, indexing, transactions, and ACID properties. This course is crucial for backend development and data analysis roles.",
    isFavorite: false,
    id: "10",
  },
  {
    title: "Operating Systems",
    code: "CS-220-OS5",
    semester: "Spring 2024",
    status: "closed",
    thumbnail: "/images/course11.jpeg",
    description:
      "Explore the inner workings of modern operating systems, including process scheduling, memory management, and file systems. This course offers hands-on labs to simulate OS-level operations and system calls.",
    isFavorite: false,
    id: "11",
  },
  {
    title: "Computer Networks",
    code: "CS-230-CN6",
    semester: "Summer 2024",
    status: "open",
    thumbnail: "/images/course12.jpg",
    description:
      "Understand how data travels across the internet. Learn networking protocols, TCP/IP stack, routing algorithms, and socket programming. Great for students pursuing cloud computing or cybersecurity.",
    isFavorite: false,
    id: "12",
  },
  {
    title: "Software Engineering Practices",
    code: "CS-240-SE7",
    semester: "Fall 2024",
    status: "open",
    thumbnail: "/images/course13.jpg",
    description:
      "Master software development methodologies such as Agile and DevOps. Learn about version control, testing strategies, and CI/CD pipelines. This course prepares you to work in real-world software teams.",
    isFavorite: false,
    id: "13",
  },
  {
    title: "Mobile App Development",
    code: "CS-250-MAD8",
    semester: "Winter 2024",
    status: "closed",
    thumbnail: "/images/course14.jpg",
    description:
      "Build native and hybrid mobile apps using tools like React Native and Flutter. Topics include UI/UX principles, performance optimization, and deploying apps to app stores.",
    isFavorite: false,
    id: "14",
  },
  {
    title: "Cloud Computing Essentials",
    code: "CS-310-CC9",
    semester: "Spring 2025",
    status: "open",
    thumbnail: "/images/course15.jpeg",
    description:
      "Learn how cloud platforms like AWS, Azure, and GCP operate. Understand virtualization, IaaS, PaaS, SaaS models, and deploy cloud-native applications. Includes hands-on with deployment pipelines.",
    isFavorite: false,
    id: "15",
  },
  {
    title: "Cybersecurity Fundamentals",
    code: "CS-320-CY10",
    semester: "Summer 2025",
    status: "open",
    thumbnail: "/images/course16.jpeg",
    description:
      "Explore core security principles such as authentication, encryption, network security, and threat detection. This course is ideal for anyone interested in ethical hacking and securing systems.",
    isFavorite: false,
    id: "16",
  },
  {
    title: "Machine Learning with Python",
    code: "CS-330-ML11",
    semester: "Fall 2025",
    status: "open",
    thumbnail: "/images/course17.jpeg",
    description:
      "Gain hands-on experience with machine learning libraries like scikit-learn and TensorFlow. Learn supervised and unsupervised learning, model evaluation, and data preprocessing techniques.",
    isFavorite: false,
    id: "17",
  },
  {
    title: "DevOps & Continuous Delivery",
    code: "CS-340-DO12",
    semester: "Winter 2025",
    status: "closed",
    thumbnail: "/images/course18.jpeg",
    description:
      "Understand how to automate build, test, and deployment processes using tools like Jenkins, Docker, and Kubernetes. This course covers infrastructure as code and monitoring strategies.",
    isFavorite: false,
    id: "18",
  },
  {
    title: "Full Stack JavaScript Development",
    code: "CS-350-FSJ13",
    semester: "Spring 2026",
    status: "open",
    thumbnail: "/images/course19.jpeg",
    description:
      "Master both frontend and backend development using JavaScript. Learn Node.js, Express, MongoDB, and integrate with React to build full-featured web apps.",
    isFavorite: false,
    id: "19",
  },
  {
    title: "Natural Language Processing",
    code: "CS-360-NLP14",
    semester: "Summer 2026",
    status: "open",
    thumbnail: "/images/course20.jpg",
    description:
      "This course introduces NLP techniques like tokenization, POS tagging, sentiment analysis, and text classification. Hands-on projects include building chatbots and spam filters using Python.",
    isFavorite: false,
    id: "20",
  },
];
