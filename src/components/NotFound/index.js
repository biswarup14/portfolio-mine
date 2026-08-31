import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound-code">404</div>
      <h1>Page Not Found</h1>
      <p>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        <FiArrowLeft size={18} /> Back Home
      </Link>
    </section>
  );
};

export default NotFound;
