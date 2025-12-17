import MainSection from "../components/about/MainSection";
import WhatIBring from "../components/about/WhatIBring";
import TechnicalJourney from "../components/about/TecJourney";
import PreviousExperience from "../components/about/PrevExperince";
import GoalsSection from "../components/about/Goals";
import ContactForm from "../components/Contact/ContactForm";

export default function About() {
  return (
    <div className="about-page">
      <MainSection />
      <WhatIBring />
      <TechnicalJourney />
      <PreviousExperience />
      <div className="contact-about-section">
        <GoalsSection />
        <ContactForm full={false} />
      </div>
    </div>
  );
}
