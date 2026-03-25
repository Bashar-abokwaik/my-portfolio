import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useState } from "react";
import PhoneModal from "./PhoneModal";

export default function Socials() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const phoneNumber = "+962797995214";
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = (e) => {
    if (!isMobile) {
      e.preventDefault();
      setShowPhone(true);
    }
  };
  return (
    <>
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

        <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
          <FaPhone /> Phone
        </a>
      </div>

      {showPhone && (
        <PhoneModal
          phoneNumber={phoneNumber}
          onClose={() => setShowPhone(false)}
        />
      )}
    </>
  );
}
