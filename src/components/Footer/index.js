import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import "./style.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/biswarup14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/biswarup-bhattacharjee-2a836019a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/biswaruprick"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
          >
            <FaXTwitter size={18} />
          </a>
        </div>

        <p className="footer-copy">
          © {year} Biswarup Bhattacharjee. Built with{" "}
          <FiHeart size={14} className="heart" aria-label="love" /> and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
