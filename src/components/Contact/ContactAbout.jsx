import { Link } from "react-router-dom";

export default function ContactAbout() {
  return (
    <>
      <p>
        I’m always open to meaningful conversations — let’s build something
        together!
      </p>
      <Link to="/contact" className="contact-button">
        Go to Contact Page
      </Link>
    </>
  );
}
