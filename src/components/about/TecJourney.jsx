import { useState } from "react";
import { courses } from "../../data/data";
import ImageModal from "./ImageModal";

export default function TechnicalJourney() {
  const [selected, setSelected] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const handleCourseClick = (courseId) => {
    setSelected(selected === courseId ? null : courseId);
  };

  return (
    <div className="technical-journey">
      <h2>My Technical Journey</h2>
      <p>
        Here is a summary of the courses and skills I've acquired over time.
      </p>

      <div className="divider">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`course course-card ${selected === course.id ? "active" : ""}`}
            onClick={() => handleCourseClick(course.id)}
          >
            <div className="course-header">
              <div className="course-img-wrapper">
                <img
                  src={course.image}
                  alt={course.name}
                  className="course-img"
                  loading="lazy"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(course.image);
                  }}
                />
              </div>

              <h3 className="course-title">{course.name}</h3>
            </div>

            {selected === course.id && (
              <div className="course-details">
                <p>{course.info}</p>
                <ul>
                  {course.Skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <ImageModal image={modalImage} onClose={closeModal} />
    </div>
  );
}
