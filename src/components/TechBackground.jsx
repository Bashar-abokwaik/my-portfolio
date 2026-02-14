import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function TechBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 80 },
          color: { value: "#00ff88" },
          links: {
            enable: true,
            color: "#00ff88",
            distance: 150,
            opacity: 0.5,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 120 } },
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: { value: 40 },
              },
            },
          },
        ],
      }}
    />
  );
}
