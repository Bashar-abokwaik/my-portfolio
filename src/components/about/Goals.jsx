import { useState } from "react";

import { goals } from "../../data/data";

export default function GoalsSection() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [activeGoal, setActiveGoal] = useState(null);

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal === selectedGoal ? null : goal);
    setActiveGoal(goal === activeGoal ? null : goal);
  };
  return (
    <div className="goals-section">
      <h2>Where I’m Going</h2>
      <div className="goals-container">
        {goals.map((goal) => (
          <div key={goal.id}>
            <div
              className={["goal-card", activeGoal === goal ? "active" : ""].join(" ")}
              onClick={() => handleGoalClick(goal)}
            >
              <span className="goal-icon">✨</span>
              <p className="goal-text">{goal.title}</p>
            </div>
            {selectedGoal === goal && (
              <div className="goal-details">
                <p>{goal.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
