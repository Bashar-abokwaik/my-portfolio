import SkillsCard from "./SkillsCard";
import { skillsData } from "../../data/data";
import Reveal from "../UI/Reveal";

export default function Skills() {
  return (
    <div className="skills-container">
      <Reveal type="popIn">
        <h2 className="skills-title">Technical Skills</h2>
      </Reveal>
      <Reveal type="slideUp">
        <div className="skills-cards">
          {skillsData.map(({ id, skill, icon: Icon }) => (
            <SkillsCard key={id} skill={skill} icon={Icon} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
