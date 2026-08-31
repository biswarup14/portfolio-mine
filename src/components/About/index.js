import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiTarget,
  FiArrowRight,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import "./style.css";

const About = () => {
  return (
    <section className="about">
      <div className="page-header">
        <span className="page-tag">&lt;about /&gt;</span>
        <h1>About Me</h1>
        <p>Learn a little more about who I am and what drives me.</p>
      </div>

      <div className="about-container">
        <div className="about-card intro-card">
          <div className="about-emoji" aria-hidden="true">🚀</div>
          <h2>Passionate Developer</h2>
          <p>
            I'm a full stack developer with a strong foundation in computer
            science and a deep love for building things for the web. I'm always
            exploring new technologies and finding creative ways to solve
            problems and bring ideas to life.
          </p>
          <p>
            My journey started with curiosity — breaking things apart to
            understand how they work — and grew into a career building robust,
            user-friendly applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <FaGraduationCap size={24} />
            </div>
            <h3>Education</h3>
            <p className="card-sub">B.Tech, Computer Science</p>
            <p>
              Narula Institute of Technology
              <br />
              <span className="muted">Kolkata · 2018 - 2022</span>
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FiBriefcase size={24} />
            </div>
            <h3>Focus Areas</h3>
            <ul className="about-list">
              <li>Frontend Development (React)</li>
              <li>Backend &amp; APIs (Node.js)</li>
              <li>Cloud &amp; Databases (Firebase, MongoDB)</li>
              <li>UI/UX &amp; Responsive Design</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FiTarget size={24} />
            </div>
            <h3>What I Bring</h3>
            <ul className="about-list">
              <li>Strong problem-solving skills</li>
              <li>Clear, effective communication</li>
              <li>Comfortable in teams &amp; solo</li>
              <li>Constant hunger to learn</li>
            </ul>
          </div>

          <div className="about-card cta-card">
            <h3>Let's work together</h3>
            <p>
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
