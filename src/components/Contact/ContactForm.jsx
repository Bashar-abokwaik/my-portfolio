import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactAbout from "./ContactAbout";
import Socials from "./Socials";

export default function ContactForm({ full = false }) {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const [status, setStatus] = useState(""); // sending, success, error

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required";
    if (name === "user_email" && !/\S+@\S+\.\S+/.test(value)) return "Invalid email";
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // تحقق كامل قبل الإرسال
    const newErrors = {
      user_name: validateField("user_name", values.user_name),
      user_email: validateField("user_email", values.user_email),
      message: validateField("message", values.message),
    };

    setErrors(newErrors);
    setTouched({ user_name: true, user_email: true, message: true });

    if (Object.values(newErrors).some((err) => err)) return; // إذا فيه error توقف

    setStatus("sending");

    emailjs
      .send(
        "service_81hzya3",
        "template_l17oabo",
        values,
        "gXecXj3xj5cfBJM0M"
      )
      .then(
        () => {
          setStatus("success");
          setValues({ user_name: "", user_email: "", message: "" });
          setErrors({ user_name: "", user_email: "", message: "" });
          setTouched({ user_name: false, user_email: false, message: false });
        },
        () => setStatus("error")
      );
  };

  const isSubmitDisabled =
    Object.values(errors).some((err) => err) ||
    !values.user_name ||
    !values.user_email ||
    !values.message;

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
          <p className="contact-text">
            Have a project in mind or a question you’d like to discuss? I enjoy
            clear, thoughtful conversations and turning ideas into practical
            solutions. Feel free to reach out — I’ll be happy to hear from you.
          </p>
          <form className="contact-form" onSubmit={handleSendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={values.user_name}
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.user_name ? "invalid" : ""}
            />
            {errors.user_name && <p className="error">{errors.user_name}</p>}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={values.user_email}
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.user_email ? "invalid" : ""}
            />
            {errors.user_email && <p className="error">{errors.user_email}</p>}

            <textarea
              name="message"
              placeholder="Your Message"
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.message ? "invalid" : ""}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" disabled={isSubmitDisabled}>
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