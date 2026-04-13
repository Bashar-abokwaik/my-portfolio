import MainSection from "../components/about/MainSection";
import WhatIBring from "../components/about/WhatIBring";
import TechnicalJourney from "../components/about/TecJourney";
import PreviousExperience from "../components/about/PrevExperince";
import GoalsSection from "../components/about/Goals";
import ContactForm from "../components/Contact/ContactForm";
import Reveal from "../components/UI/Reveal";

export default function About() {
  return (
    <div className="about-page">
      <MainSection />
      <Reveal type="fadeSlide">
        <WhatIBring />
      </Reveal>
      <Reveal type="slideInUp">
        <TechnicalJourney />
      </Reveal>
      <Reveal type="slideInLeft">
        <PreviousExperience />
      </Reveal>
      <Reveal type="slideInUp">
        <div className="contact-about-section">
          <GoalsSection />
          <ContactForm full={false} />
        </div>
      </Reveal>
    </div>
  );
}
