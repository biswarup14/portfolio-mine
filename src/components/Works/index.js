import { FiGithub } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import "./style.css";

const projects = [
  {
    title: "Dentist Website",
    description:
      "A modern, responsive website for a local dentist, featuring an online appointment booking system and patient information management.",
    tech: ["React", "Node.js", "CSS"],
    github: "https://github.com/biswarup14/DocWebapp",
  },
  {
    title:"GATE CS pyq",
    description:
      "A web application that provides a comprehensive collection of previous year questions for GATE Computer Science, allowing users to practice and prepare effectively.",
    tech: ["typescript", "python", "javascript","PostgreSQL"],
    github: "https://github.com/biswarup14/studyGate"
  },
  {
    title: "Employee Management Website",
    description:
      "A web application for managing employee records, including features for adding, updating, and deleting employee information, as well as generating reports.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/biswarup14/Employee-management-System"
  },
  {
    title: "Ecommerce-Amazon Clone",
    description:
      "A full-stack e-commerce application replicating Amazon's core features including product listings, cart management, and secure checkout with authentication.",
    tech: ["React", "Firebase", "Stripe", "Context API"],
    github: "https://github.com/biswarup14/Amazon-Full-Stack-Clone",
  },

  {
    title: "Movie Streaming Platform",
    description:
      "A streaming platform UI clone with dynamic content rows, movie trailers, and a smooth, cinematic user experience.",
    tech: ["React", "TMDB API", "CSS"],
    github: "https://github.com/biswarup14/Netflix_Clone",
  },
  {
    title: "Video Conferencing App",
    description:
      "A video conferencing application allowing users to host and join video calls with real-time audio and video streaming.",
    tech: ["React", "WebRTC", "Socket.io"],
    github: "https://github.com/biswarup14/Zoom-NodeJs",
  },

];

const Works = () => {
  const [gridRef, gridInView] = useInView();
  return (
    <section className="works">
      <div className="page-header reveal">
        <span className="page-tag">&lt;works /&gt;</span>
        <h1>My Work</h1>
        <p>
          A selection of projects I've built. Find more on my{" "}
          <a
            href="https://github.com/biswarup14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div ref={gridRef} className={`projects-grid ${gridInView ? "in-view" : ""}`}>
        {projects.map((project, i) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.title}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="project-content">
              <div className="project-top">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code`}
                  className="project-links"
                >
                  <FiGithub size={20} />
                </a>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>

              <ul className="project-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="works-footer">
        <p>Interested in seeing more?</p>
        <a
          href="https://github.com/biswarup14"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={18} /> View All on GitHub
        </a>
      </div>
    </section>
  );
};

export default Works;
