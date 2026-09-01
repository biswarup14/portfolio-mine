import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./style.css";

const projects = [
  {
    title: "Amazon Clone",
    description:
      "A full-stack e-commerce application replicating Amazon's core features including product listings, cart management, and secure checkout with authentication.",
    tech: ["React", "Firebase", "Stripe", "Context API"],
    github: "https://github.com/biswarup14",
    featured: true,
  },
  {
    title: "WhatsApp MERN Stack",
    description:
      "A real-time messaging application built with the MERN stack, featuring instant chat, online presence, and media sharing.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/biswarup14",
  },
  {
    title: "Netflix Clone",
    description:
      "A streaming platform UI clone with dynamic content rows, movie trailers, and a smooth, cinematic user experience.",
    tech: ["React", "TMDB API", "CSS"],
    github: "https://github.com/biswarup14",
  },
  {
    title: "Zoom Clone",
    description:
      "A video conferencing application allowing users to host and join video calls with real-time audio and video streaming.",
    tech: ["React", "WebRTC", "Socket.io"],
    github: "https://github.com/biswarup14",
  },
  {
    title: "Covid-19 Tracker",
    description:
      "A real-time COVID-19 statistics dashboard with interactive charts and global & country-specific data visualizations.",
    tech: ["React", "Chart.js", "REST API"],
    github: "https://github.com/biswarup14",
  },
  {
    title: "Facebook Clone",
    description:
      "A social media interface replicating the core Facebook experience with user posts, reactions, and news feeds.",
    tech: ["React", "Firebase", "CSS"],
    github: "https://github.com/biswarup14",
  },
];

const Works = () => {
  return (
    <section className="works">
      <div className="page-header">
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

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.title}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="project-content">
              <div className="project-top">
                <div className="project-emoji" aria-hidden="true">
                  {i % 3 === 0 ? "💻" : i % 3 === 1 ? "📱" : "🌐"}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                  >
                    <FiGithub size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
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
