export default function SkillsCard({ skill, icon: Icon }) {
  return (
    <div className="skill-card">
      {Icon && <Icon className="skill-icon" />}
      <p className="skill-name">{skill}</p>
    </div>
  );
};
