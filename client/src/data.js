const courses = [
  {
    id: 1,
    imgUrl: "assets/img/gallery/sample1.jpg",
    tag: "Web Development",
    name: "Basics of Web Development",
    description:
      "Learn the essentials of web development in this beginner-friendly course, covering HTML, CSS, and JavaScript to build dynamic websites..",
    details: [
      "This Basics of Web Development course introduces you to the core tools and technologies used in creating websites from scratch. Starting with HTML, you’ll learn to structure web content; then, with CSS, you’ll style and design engaging layouts. Finally, you’ll explore JavaScript, adding interactive elements to make your pages responsive and dynamic. With hands-on projects and practical examples, this course is designed to build foundational skills, enabling you to create your own simple websites by the end. Whether you're interested in a career in tech or just curious about coding, this course is the perfect starting point.",
      "This Basics of Web Development course introduces you to the essential tools and languages needed to create functional, attractive websites from scratch. Starting with HTML, you’ll learn how to structure content and create a strong foundation for web pages, covering everything from headers and paragraphs to links and media integration. Next, the course covers CSS, where you’ll discover how to style and design your layouts, add colors, and ensure responsiveness across devices. Through interactive examples, you’ll gain hands-on practice, bringing web pages to life with styling, positioning, and animation basics.",
      "In the final portion of the course, you’ll learn JavaScript, the programming language that adds interactivity to websites. From understanding variables, loops, and functions to working with the Document Object Model (DOM), JavaScript will allow you to create responsive, dynamic pages. By the end, you’ll have developed foundational skills across HTML, CSS, and JavaScript, equipping you to build simple websites and continue exploring more advanced topics in web development. Ideal for beginners with no prior coding experience, this course is a perfect starting point for anyone interested in a career in web development or simply looking to learn a new, valuable skill.",
    ],
    price: "Rs. 499",
  },
  {
    id: 2,
    imgUrl: "assets/img/gallery/sample2.jpg",
    tag: "Web Development",
    name: "Advanced Web Development using MERN stack",
    description:
      "Master full-stack web development with the MERN stack, building complex applications using MongoDB, Express.js, React, and Node.js.",
    details: [
      "This Advanced Web Development course dives deep into the MERN stack, covering MongoDB, Express.js, React, and Node.js to help you build robust, full-stack applications. You’ll start by learning how to design scalable back-end solutions with Node.js and Express, manage data with MongoDB, and build interactive front-ends with React. Through real-world projects, you’ll gain hands-on experience in API integration, authentication, state management, and deployment. This course is perfect for those with web development experience looking to enhance their skills and create dynamic, data-driven applications. By the end, you’ll be equipped to tackle complex, full-stack projects independently.",
      "This Advanced Web Development course focuses on the MERN stack—MongoDB, Express.js, React, and Node.js—providing you with the tools to build full-stack applications. Beginning with Node.js and Express.js, you’ll learn to design scalable back-end solutions, handling databases, API integration, and server-side logic. MongoDB will be introduced as a NoSQL database solution, where you’ll learn to manage and manipulate data efficiently. This first part of the course ensures you have a strong understanding of back-end development and how to build RESTful APIs for client-server communication.",
      "The course then transitions into front-end development with React, a popular JavaScript library used for building dynamic user interfaces. You’ll learn to manage state, create reusable components, and handle user input in real-time applications. Advanced topics like authentication, state management with Redux, and deployment are also covered, ensuring your applications are secure and production-ready. By the end of the course, you’ll have hands-on experience building a fully functional web application with the MERN stack, preparing you for real-world development projects or a career as a full-stack developer.",
    ],
    price: "Rs. 999",
  },
  {
    id: 3,
    imgUrl: "assets/img/gallery/sample3.jpg",
    tag: "Data Structures",
    name: "Complete DSA using C++",
    description:
      "Master data structures and algorithms in C++ to solve complex problems efficiently, preparing you for technical interviews and competitive programming.",
    details: [
      "This Data Structures and Algorithms (DSA) course focuses on building a strong foundation in problem-solving with C++. You’ll learn key data structures like arrays, linked lists, stacks, queues, trees, and graphs, as well as essential algorithms for sorting, searching, and recursion. With hands-on coding exercises, you’ll gain the skills to optimize performance and write efficient code. Designed for intermediate C++ users, this course prepares you for technical interviews, coding competitions, and advanced software development. By the end, you'll be able to analyze time and space complexity, making you adept at tackling complex coding challenges.",
      "This Data Structures and Algorithms (DSA) course in C++ is designed to provide a deep understanding of core computer science concepts, preparing you for efficient problem-solving. The course begins with foundational data structures such as arrays, linked lists, stacks, and queues, essential for organizing and managing data in various formats. You’ll then explore complex structures like trees, heaps, and graphs, gaining insights into how each can be applied to solve unique computational challenges. Each concept is paired with real-world examples and exercises, helping you grasp both theoretical and practical applications of C++.",
      "In the second half, you’ll dive into algorithms essential for programming efficiency, including searching, sorting, recursion, and dynamic programming. With a strong focus on analyzing time and space complexity, the course prepares you to write optimized code for technical interviews and competitive programming. By the end, you’ll have the skills to tackle complex coding challenges, analyze the efficiency of algorithms, and develop solutions that require minimal resources. Perfect for intermediate programmers, this course is a step toward mastering algorithmic thinking and advancing in software development.",
    ],
    price: "Rs. 799",
  },
  {
    id: 4,
    imgUrl: "assets/img/gallery/sample4.jpg",
    tag: "Data Structures",
    name: "Complete DSA using JAVA",
    description:
      "Learn Data Structures and Algorithms (DSA) in Java, enhancing your coding efficiency and problem-solving skills for technical interviews and real-world applications.",
    details: [
      "This Data Structures and Algorithms (DSA) course in Java is designed to elevate your programming skills through core concepts and problem-solving techniques. Covering foundational data structures like arrays, linked lists, stacks, queues, trees, and graphs, along with key algorithms for searching, sorting, and recursion, the course provides hands-on coding practice. You’ll learn to analyze and optimize code for efficiency, essential for technical interviews and advanced Java programming. Ideal for students and professionals, this course equips you with the knowledge to write robust, high-performance code, preparing you for a career in software development and beyond.",
      "This Data Structures and Algorithms (DSA) course in Java is crafted to build your skills in organizing data efficiently and writing optimized code. Beginning with essential data structures such as arrays, stacks, queues, and linked lists, you’ll learn how to manage data effectively within different scenarios. The course then covers more advanced structures like binary trees, hash tables, and graphs, each accompanied by Java-based coding exercises to solidify your understanding. By focusing on these core concepts, you’ll gain a robust foundation in Java programming that is both practical and theoretically sound.",
      "The latter part of the course focuses on essential algorithms for performance, including sorting, searching, dynamic programming, and recursion. With a strong emphasis on time and space complexity analysis, you’ll be equipped to write code that is not only functional but also efficient. This course is ideal for those aiming for software engineering roles or competitive programming, as it provides the tools to solve complex problems and perform well in coding interviews. By the end, you’ll have a comprehensive understanding of DSA in Java, empowering you to design solutions for a variety of technical challenges.",
    ],
    price: "Rs. 799",
  },
  {
    id: 5,
    imgUrl: "assets/img/gallery/sample5.jpg",
    tag: "Machine Learning",
    name: "Machine Learning Bootcamp",
    description:
      "Discover the fundamentals of machine learning, exploring algorithms and models to create predictive solutions for real-world problems using Python.",
    details: [
      "This Machine Learning course introduces you to the core concepts and algorithms that power intelligent systems. Starting with data preprocessing and visualization, you’ll dive into supervised and unsupervised learning techniques, including regression, classification, clustering, and decision trees. Using Python and libraries like Scikit-Learn, you’ll gain hands-on experience building and evaluating models, while learning to optimize their performance. This course is perfect for beginners and intermediate learners in data science or programming, equipping you to understand machine learning pipelines and apply predictive models to real-world datasets. By the end, you’ll be ready to tackle machine learning projects with confidence.",
      "This Machine Learning course offers a solid foundation in machine learning concepts and hands-on techniques, designed for beginners and intermediate learners in data science or programming. Starting with essential steps like data preprocessing, cleaning, and visualization, the course guides you through the entire machine learning pipeline. You’ll explore key algorithms used in machine learning, such as linear and logistic regression for predictive modeling, k-means for clustering, and decision trees for classification. Practical exercises reinforce these concepts, helping you understand how to transform data into insights using Python and libraries like Scikit-Learn, Pandas, and Matplotlib.",
      "In the second half of the course, you’ll dive deeper into model evaluation and optimization techniques, ensuring the models you build perform accurately and efficiently. Topics include cross-validation, hyperparameter tuning, and working with advanced algorithms like support vector machines (SVM) and ensemble methods. By the end, you’ll have a well-rounded understanding of supervised and unsupervised learning, enabling you to apply machine learning to real-world problems confidently. Ideal for those seeking a career in data science or artificial intelligence, this course equips you to start building your own machine learning projects, setting a strong foundation for more advanced studies in AI and data science.",
    ],
    price: "Rs. 499",
  },
  {
    id: 6,
    imgUrl: "assets/img/gallery/sample6.jpg",
    tag: "Artificial Intelligence",
    name: "Fundamentals Of Artificial Intelligence",
    description:
      "Explore Artificial Intelligence fundamentals, including machine learning, neural networks, and natural language processing, to develop intelligent systems for real-world applications.",
    details: [
      "This Artificial Intelligence course provides a comprehensive introduction to AI, covering foundational concepts and techniques that drive modern intelligent systems. You’ll learn about machine learning, neural networks, natural language processing, and computer vision, gaining insights into how AI models are designed and trained. Through hands-on projects in Python, you’ll build and evaluate AI solutions, explore deep learning, and understand ethical considerations in AI development. Designed for beginners to intermediate learners, this course equips you with practical skills to create AI-driven applications and opens the door to advanced study or a career in artificial intelligence.",
      "This Artificial Intelligence (AI) course is a comprehensive introduction to the core techniques and concepts that drive intelligent systems. You’ll begin with the fundamentals of machine learning, exploring how algorithms allow computers to learn patterns and make predictions. Core concepts include supervised and unsupervised learning, neural networks, and reinforcement learning, providing you with a broad understanding of how AI systems are trained and evaluated. Through practical examples in Python, you’ll apply these concepts to real-world datasets, learning to build models for prediction, classification, and clustering.",
      "The second part of the course delves into more specialized areas like natural language processing (NLP) and computer vision, giving you insight into AI applications in text analysis and image recognition. You’ll explore the basics of deep learning, learning how neural networks can be adapted for more complex tasks, and consider ethical implications in AI, including bias and data privacy. Designed for students and professionals interested in AI, this course prepares you to tackle more advanced AI applications or pursue further studies. By the end, you’ll have a strong understanding of AI fundamentals and be ready to build your own intelligent applications for real-world challenges.",
    ],
    price: "Rs. 499",
  },
];

export default courses;
