import { useState } from "react";
import { experiencesData } from "../../data/data";

export default function PreviousExperience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="previous-experience">
      <h2>Previous Experience</h2>

      <div className="timeline">
        {experiencesData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div
              className={`exp-card ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleCard(index)}
            >
              <p className="exp-title">
                {exp.role} at {exp.company}
                <span>({exp.period})</span>
              </p>
              <div className="exp-details">
                <ul>
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-skills">
                <p>Skills:</p>
                <div>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx}> {idx === exp.skills.length - 1 ? skill : skill + ", "} </span>
                  ))}
                </div>
              </div>
              <div className="exp-hint">
                {openIndex === index
                  ? "Click to collapse ▲"
                  : "Click to expand ▼"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
