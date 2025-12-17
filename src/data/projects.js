// src/data/projects.js

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

export const projects = [
  {
    id: 1,
    name: "Tic Tac Toe",
    info: "A classic Tic-Tac-Toe game built with React, featuring a clean UI and smooth state handling. Designed to highlight my understanding of component structure, event handling, and game logic.",
    description: `This Tic-Tac-Toe project is a fully interactive React application demonstrating clean component architecture. The board, squares, and game logic are separated into reusable components. React hooks (useState) efficiently manage game state, including active player turns, win detection, and draw detection.
I implemented optimized conditional logic to detect wins instantly and draws, and prevented invalid moves by tracking selected squares. The game log dynamically updates to show all moves, enhancing user feedback.
One challenge was ensuring correct turn sequencing and minimizing unnecessary re-renders, which I solved by careful state management and deep copying the board array. Another was creating smooth UI feedback for a fast and intuitive gameplay experience.
This project highlights my grasp of React fundamentals: state lifting, conditional rendering,  and dynamic styling.`,
    coverImage: TicTacToeCover,
    images: [TicTacToe_1, TicTacToe_2, TicTacToe_3, TicTacToe_4, TicTacToe_5],
    liveDemo: "https://tic-tac-toe-58d3a.web.app/",
    repoLink: "https://github.com/Bashar-abokwaik/Tic-Tac-toy",
  },

  {
    id: 2,
    name: "Food Order App",
    info: "A complete food ordering application that simulates a real-world user experience from browsing meals to placing an order.",
    description:
      "The Food Order App is a production-style React application that simulates a real-world food ordering experience from browsing meals to submitting orders. The app fetches meal data from a backend API and allows users to add items to a cart, manage quantities, and complete the checkout flow with real-time feedback.\n\nGlobal state is managed using the Context API combined with useReducer to handle complex cart logic such as item aggregation, quantity updates, and total price calculation across the entire application. A custom reusable HTTP hook is implemented to manage data fetching, loading states, and error handling in a clean and scalable way.\n\nThe project is structured around reusable UI components, including buttons, inputs, and modal components, designed to be flexible and easily reused across different parts of the app. This demonstrates a strong understanding of component-driven architecture, separation of concerns, and maintainable UI design.\n\nAdditional highlights include controlled forms with validation, dynamic UI updates, smooth animations, and responsive layouts built using plain CSS. Overall, this project showcases your ability to build scalable, well-organized React applications that integrate frontend logic with a backend service while following clean code and real-world development practices.",
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
    id: 3,
    name: "Task Management System",
    info: "A clean and efficient task management application built with React and Tailwind CSS, focused on productivity, clarity, and real-world workflow simulation.",
    description:
      "This Task Management System is a productivity-driven web application built using React and Tailwind CSS. The project focuses on simulating real-world task workflows while maintaining a clean and intuitive user experience.\n\n" +
      "The application supports full CRUD operations, allowing users to create, edit, and delete tasks seamlessly. Tasks are dynamically rendered based on application state, with conditional UI feedback that improves usability and clarity. The project heavily relies on reusable components, controlled and uncontrolled form handling, and clear state management patterns.\n\n" +
      "Throughout the project, I focused on writing clean, maintainable React code by structuring components logically and separating concerns. Tailwind CSS was used to build a fully responsive layout with consistent spacing, typography, and visual hierarchy. The project demonstrates practical experience with real-world frontend challenges such as validation, conditional rendering, dynamic styling, and user-driven interactions.",
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
    id: 4,
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
    id: 5,
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
