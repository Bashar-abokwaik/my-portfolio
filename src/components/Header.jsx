import { NavLink } from "react-router-dom";
import { useState } from "react";
import myPhoto from "../assets/images/my_photo.jpeg";
import ImageModal from "./about/ImageModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <nav className="header">
      <div className="header-left">
        <div className="my-photo">
          <img src={myPhoto} alt="Bashar Abokwaik" onClick={() => openModal(myPhoto)} />
          <ImageModal image={modalImage} onClose={closeModal} />
        </div>
        <div className="logo">Bashar Abokwaik</div>
      </div>
      {
        // hamburger button
      }
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`header-links ${open ? "open" : ""}`}>
        <li className="header-link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
