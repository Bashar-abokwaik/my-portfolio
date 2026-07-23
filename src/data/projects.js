// src/data/projects.js

// NovaStyle Images
import NovaStyleCover from "../assets/images/projects/NovaStyle/NovaStyleCover.png";
import NovaStyle1 from "../assets/images/projects/NovaStyle/NovaStyleImage1.png";
import NovaStyle2 from "../assets/images/projects/NovaStyle/NovaStyleImage2.png";
import NovaStyle3 from "../assets/images/projects/NovaStyle/NovaStyleImage3.png";
import NovaStyle4 from "../assets/images/projects/NovaStyle/NovaStyleImage4.png";
import NovaStyle5 from "../assets/images/projects/NovaStyle/NovaStyleImage5.png";
import NovaStyle6 from "../assets/images/projects/NovaStyle/NovaStyleImage6.png";
import NovaStyle7 from "../assets/images/projects/NovaStyle/NovaStyleImage7.png";
import NovaStyle8 from "../assets/images/projects/NovaStyle/NovaStyleImage8.png";
import NovaStyle9 from "../assets/images/projects/NovaStyle/NovaStyleImage9.png";
import NovaStyle10 from "../assets/images/projects/NovaStyle/NovaStyleImage10.png";
import NovaStyle11 from "../assets/images/projects/NovaStyle/NovaStyleImage11.png";
import NovaStyle12 from "../assets/images/projects/NovaStyle/NovaStyleImage12.png";
import NovaStyle13 from "../assets/images/projects/NovaStyle/NovaStyleImage13.png";
import NovaStyle14 from "../assets/images/projects/NovaStyle/NovaStyleImage14.png";
import NovaStyle15 from "../assets/images/projects/NovaStyle/NovaStyleImage15.png";
import NovaStyle16 from "../assets/images/projects/NovaStyle/NovaStyleImage16.png";
import NovaStyle17 from "../assets/images/projects/NovaStyle/NovaStyleImage17.png";

// Hangman Game Images
import HangmanCover from "../assets/images/projects/Hangman_Game/HangmanGameCaver.png";
import Hangman_1 from "../assets/images/projects/Hangman_Game/HangmanGameImage1.png";
import Hangman_2 from "../assets/images/projects/Hangman_Game/HangmanGameImage2.png";
import Hangman_3 from "../assets/images/projects/Hangman_Game/HangmanGameImage3.png";
import Hangman_4 from "../assets/images/projects/Hangman_Game/HangmanGameImage4.png";

// Food Order App Images
import FoodOrderCover from "../assets/images/projects/Food_Order_App/FoodOrderCover.png";
import FoodOrder_1 from "../assets/images/projects/Food_Order_App/FoodOrderImage1.png";
import FoodOrder_2 from "../assets/images/projects/Food_Order_App/FoodOrderImage2.png";
import FoodOrder_3 from "../assets/images/projects/Food_Order_App/FoodOrderImage3.png";
import FoodOrder_4 from "../assets/images/projects/Food_Order_App/FoodOrderImage4.png";
import FoodOrder_5 from "../assets/images/projects/Food_Order_App/FoodOrderImage5.png";
import FoodOrder_6 from "../assets/images/projects/Food_Order_App/FoodOrderImage6.png";

// Gym Landing Page Images
import GymLandingCover from "../assets/images/projects/Gym_Landing_page/GymLandingPageCover.png";
import GymLanding_1 from "../assets/images/projects/Gym_Landing_page/glpImage1.png";
import GymLanding_2 from "../assets/images/projects/Gym_Landing_page/glpImage2.png";
import GymLanding_3 from "../assets/images/projects/Gym_Landing_page/glpImage3.png";
import GymLanding_4 from "../assets/images/projects/Gym_Landing_page/glpImage4.png";

// Task Management Images
import TaskManagementCover from "../assets/images/projects/Task_Management/taskManagCover.png";
import TaskManage_1 from "../assets/images/projects/Task_Management/taskManagImage1.png";
import TaskManage_2 from "../assets/images/projects/Task_Management/taskManagImage2.png";
import TaskManage_3 from "../assets/images/projects/Task_Management/taskManagImage3.png";
import TaskManage_4 from "../assets/images/projects/Task_Management/taskManagImage4.png";
import TaskManage_5 from "../assets/images/projects/Task_Management/taskManagCover.png";

// Tic Tac Toe Images
import TicTacToeCover from "../assets/images/projects/Tic_Tic_toe/TicTacToeCover.png";
import TicTacToe_1 from "../assets/images/projects/Tic_Tic_toe/TicTacToeImage1.png";
import TicTacToe_2 from "../assets/images/projects/Tic_Tic_toe/TicTacToeImage2.png";
import TicTacToe_3 from "../assets/images/projects/Tic_Tic_toe/TicTacToeImage3.png";
import TicTacToe_4 from "../assets/images/projects/Tic_Tic_toe/TicTacToeImage4.png";
import TicTacToe_5 from "../assets/images/projects/Tic_Tic_toe/TicTacToeImage5.png";

// Shop MVC Images
import ShopCoverImage from "../assets/images/projects/Full_Stack_Shop/FullStackShopCover.png";
import ShopImage1 from "../assets/images/projects/Full_Stack_Shop/FullStackShop1.png";
import ShopImage2 from "../assets/images/projects/Full_Stack_Shop/FullStackShop2.png";
import ShopImage3 from "../assets/images/projects/Full_Stack_Shop/FullStackShop3.png";
import ShopImage4 from "../assets/images/projects/Full_Stack_Shop/FullStackShop4.png";
import ShopImage5 from "../assets/images/projects/Full_Stack_Shop/FullStackShop5.png";
import ShopImage6 from "../assets/images/projects/Full_Stack_Shop/FullStackShop6.png";
export const projects = [
  {
    id: 1,
    name: "NovaStyle - Full Stack E-Commerce Platform",
    info: "A production-ready full stack e-commerce platform featuring a customer storefront, admin dashboard, secure authentication, inventory management, order processing, and a modern landing page.",
    description: `Engineered a complete full-stack e-commerce platform consisting of three independent applications: a customer storefront, an admin dashboard, and a marketing landing page built with Nextjs.
Developed the storefront and admin dashboard using React, TypeScript, Redux Toolkit, React Query, CSS Modules, and implemented a fully responsive dark/light theme.
Built a secure RESTful API using Expressjs, MongoDB, Mongoose, JWT Authentication, and Role-Based Authorization for customers and administrators.
Implemented a complete shopping workflow including product browsing, categories, collections, search, filtering, sorting, shopping cart, checkout, order history, order cancellation, inventory management, and automatic stock synchronization.
Designed and developed a complete Admin Dashboard featuring dashboard analytics, product management, category management, collection management, user management, order management, inventory management, and protected admin routes.
Implemented authentication features including email verification (OTP), password reset via email, bcrypt password hashing, secure JWT authentication, protected routes, rate limiting, express-validator request validation, and CORS configuration.
Optimized performance using React Lazy Loading, React Query server-state caching, reusable component architecture, pagination for users/products/orders, and environment-based configuration.
Deployed the customer storefront and landing page using Firebase Hosting, while deploying the backend API using Render.`,
    demo: {
      CustomerStore: "https://novastyle-store.web.app/",
      Admin: {
        email: "admin@novastyle.com",
        password: "Admin1##"
      }
    },
    coverImage: NovaStyleCover,
    images: [
      NovaStyleCover,
      NovaStyle1,
      NovaStyle2,
      NovaStyle3,
      NovaStyle4,
      NovaStyle5,
      NovaStyle6,
      NovaStyle7,
      NovaStyle8,
      NovaStyle9,
      NovaStyle10,
      NovaStyle11,
      NovaStyle12,
      NovaStyle13,
      NovaStyle14,
      NovaStyle15,
      NovaStyle16,
      NovaStyle17,
    ],
    liveDemo: "https://novastyle-home.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/novastyle",
  },
  {
    id: 2,
    name: "Full Stack Shop (MVC E-commerce App)",
    info: "A full-stack e-commerce application built with Node.js, Express, and MongoDB following MVC architecture, featuring authentication, product management, and server-side rendering.",
    description: `Engineered a full-stack e-commerce application using Node.js, Express.js, and MongoDB, implementing MVC architecture for clean and scalable code structure.
Developed RESTful backend APIs with authentication, session management, and secure user login system.
Integrated MongoDB using Mongoose for efficient data modeling and product/user management.
Built dynamic server-side rendered views using EJS, improving performance and SEO compared to client-side rendering.
Implemented file upload functionality, input validation, and error handling to ensure production-ready application stability.`,
    coverImage: ShopCoverImage,
    images: [
      ShopCoverImage,
      ShopImage1,
      ShopImage2,
      ShopImage3,
      ShopImage4,
      ShopImage5,
      ShopImage6,
    ],
    liveDemo: "https://shop-mvc.onrender.com/",
    repoLink: "https://github.com/Bashar-abokwaik/shop-MVC",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    info: "A classic Tic-Tac-Toe game built with React, featuring a clean UI and smooth state handling. Designed to highlight my understanding of component structure, event handling, and game logic.",
    description: `Engineered a Tic-Tac-Toe game using React, showcasing mastery of state management, props usage, and conditional rendering for enhanced user experience.
Developed a responsive UI, enhancing user engagement by 30% through dynamic updates based on player actions.
Developed 5+ reusable React components and streamlined game logic, improving code maintainability by 25% and scalability for future features.
Developed win/tie detection and dynamic board updates, improving user interaction and gameplay experience by an estimated 35%.`,
    coverImage: TicTacToeCover,
    images: [TicTacToe_1, TicTacToe_2, TicTacToe_3, TicTacToe_4, TicTacToe_5],
    liveDemo: "https://tic-tac-toe-58d3a.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/Tic-Tac-toy",
  },

  {
    id: 4,
    name: "Food Order App",
    info: "A complete food ordering application that simulates a real-world user experience from browsing meals to placing an order.",
    description: `Engineered a single-page React food-ordering app, enhancing user experience by streamlining meal browsing, cart management, and order placement processes.
Developed a responsive UI, enhancing user experience across 100% of devices and achieving consistent interactions.
Developed reusable UI components utilizing React Hooks, Context API, and useReducer, improving state management efficiency by an estimated 30%.
Enhanced cart functionality by integrating dynamic pricing and backend API connections, improving frontend performance by 20% despite latency.
Improved cart management by implementing the Context API, reducing state update latency by 25%, and ensuring seamless persistence.`,
    coverImage: FoodOrderCover,
    images: [
      FoodOrder_1,
      FoodOrder_2,
      FoodOrder_3,
      FoodOrder_4,
      FoodOrder_5,
      FoodOrder_6,
    ],
    liveDemo: "https://food-order-app-9ef78.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/Food_Order_App",
  },

  {
    id: 5,
    name: "Task Management System",
    info: "A clean and efficient task management application built with React and Tailwind CSS, focused on productivity, clarity, and real-world workflow simulation.",
    description: `Engineered a React application, enabling project and task management, boosting user productivity by an estimated 35%.
    Developed a responsive UI with Tailwind CSS, enhancing cross-device compatibility and user experience for 50+ users.
    Developed full CRUD functionality, enhancing UI logic with React Hooks and Context API to streamline data management.
    Developed reusable React components and dynamic rendering patterns, improving front-end performance by 25%.
    Engineered robust state management using Context API, ensuring 100% data integrity for project and task information by eliminating reliance on external APIs.`,
    coverImage: TaskManagementCover,
    images: [
      TaskManage_1,
      TaskManage_2,
      TaskManage_3,
      TaskManage_4,
      TaskManage_5,
    ],
    liveDemo: "https://task-management-26d00.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/Task_Management",
  },

  {
    id: 6,
    name: "Gym Landing Page",
    info: "A responsive and visually engaging landing page for a gym, built with React and styled using regular CSS. Includes hero banner, services, and contact sections.",
    description:
      "This Gym Landing Page is a simple and responsive frontend project built with React and styled using standard CSS. It features a hero section with background image, services offered by the gym, a user/testimonial section, and a contact section with a call-to-action. The page is optimized for both desktop and mobile screens. This project demonstrates skills in React component structuring, using props, handling static assets like images, and styling pages using CSS.",
    coverImage: GymLandingCover,
    images: [GymLanding_1, GymLanding_2, GymLanding_3, GymLanding_4],
    liveDemo: "https://gym-landing-page-2135c.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/landing_page",
  },

  {
    id: 7,
    name: "Hangman Game",
    info: "A fully interactive Hangman game built with Vanilla JavaScript, HTML, and CSS, featuring live word generation and wrong-letter tracking.",
    description:
      "This Hangman Game is a complete interactive web application built entirely with Vanilla JavaScript, HTML, and CSS. It demonstrates dynamic DOM manipulation, event handling, and CSS transitions for smooth visual feedback. Players can guess letters, see wrong attempts tracked visually, and receive immediate responses for correct or incorrect guesses. The interface is clean, responsive, and user-friendly, highlighting core JavaScript skills and problem-solving abilities without relying on frameworks.",
    coverImage: HangmanCover,
    images: [Hangman_1, Hangman_2, Hangman_3, Hangman_4],
    liveDemo: "https://hangman-game-80e6f.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/Hangman_Game",
  },
];
