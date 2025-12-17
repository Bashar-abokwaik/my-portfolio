import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactAbout from "./ContactAbout";
import Socials from "./Socials";

export default function ContactForm({ full = false }) {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_81hzya3", // Service ID
        "template_l17oabo", // Template ID
        formRef.current,
        "gXecXj3xj5cfBJM0M" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact-section">
      <h2>Let’s Connect</h2>

      {!full && (
        <div className="contact-about">
          <ContactAbout />
          <Socials />
        </div>
      )}

      {full && (
        <div className="contact-intro">
          <p>
            I’m always open to meaningful conversations — let’s build something
            together!
          </p>
          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            {status === "success" && (
              <p className="status success">Message sent successfully! ✅</p>
            )}

            {status === "error" && (
              <p className="status error">Something went wrong ❌</p>
            )}
          </form>
          <Socials />
        </div>
      )}
    </div>
  );
}
