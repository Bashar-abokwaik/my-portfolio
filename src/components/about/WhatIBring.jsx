import { bringSkills } from "../../data/data";

export default function WhatIBring() {
  return (
    <div className="what-i-bring">
      <h2 className="bring-title">What I Bring as a Developer</h2>

      <ul className="bring-grid">
        {bringSkills.map((skill, index) => (
          <li key={index} className="bring-item">
            <span className="bring-icon">✔</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
