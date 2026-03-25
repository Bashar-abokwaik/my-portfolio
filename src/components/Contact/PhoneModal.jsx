import { FaCopy } from "react-icons/fa";


import { useState } from "react";

export default function PhoneModal({ phoneNumber, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <div className="phone-modal" onClick={onClose}>
      <div className="phone-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="phone-content">
          <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
            {copied ? "✔" : <FaCopy />}
          </button>

          <span className="phone-number">{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
}