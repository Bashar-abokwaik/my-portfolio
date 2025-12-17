import { createPortal } from "react-dom";

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return createPortal(
    <div className="modal" onClick={onClose}>
      <img src={image} alt="Zoomed" className="modal-img" />
    </div>,
    document.getElementById("modal-root")
  );
}
