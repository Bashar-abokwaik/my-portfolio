import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>

      <h2 className="notfound-subtitle">Page Not Found</h2>

      <p className="notfound-text">
        The page you're looking for does not exist or may have been moved.
      </p>

      <Link to="/" className="notfound-btn">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </div>
  );
}
