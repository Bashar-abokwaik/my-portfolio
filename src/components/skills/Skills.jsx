import SkillsCard from "./SkillsCard";
import { skillsData } from "../../data/data";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-cards">
        {skillsData.map(({ id, skill, icon: Icon }) => (
          <SkillsCard key={id} skill={skill} icon={Icon} />
        ))}
      </div>
    </div>
  );
}



