import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials">
      <a href="mailto:bashar.abokaik@gmail.com">
        <FaMailBulk /> Email
      </a>
      <a
        href="https://www.linkedin.com/in/bashar-abokwaik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin /> LinkedIn
      </a>
      <a
        href="https://github.com/Bashar-abokwaik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> GitHub
      </a>
      <a href="tel:+962797995214">
        <FaPhone /> Phone
      </a>
    </div>
  );
}
