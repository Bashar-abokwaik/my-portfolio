
import { Link } from "react-router-dom";
import Skills from "../components/skills/Skills";
import TechBackground from "../components/TechBackground";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TypingText from "../components/TypingText";



export default function Home() {
  
  return (
    <div className="home-page">
      <TechBackground />
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="home-title">Frontend Developer</h1>
          <TypingText />
          <p className="home-description">
            Turning ideas into interactive, clean, and scalable web interfaces.
          </p>
          <div className="home-buttons">
            <a
              href="/Bashar_Abokwaik_Frontend_React.pdf"
              download
              className="btn cv-btn"
            >
              Download CV
            </a>
            <Link to="/projects" className="btn projects-btn">
              My Projects
            </Link>
          </div>
        </div>
        <div className="hero-animation">
          <DotLottieReact
            className="anime-image"
            src="https://lottie.host/db9750b5-44c0-40aa-a443-2a9e0fdf586e/bPPE8OamwY.lottie"
            loop
            autoplay
          />
        </div>
      </section>
      <Skills />
    </div>
  );
}
