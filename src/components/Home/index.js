import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import "./style.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-bg" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="home-container">
        <div className="home-text">
          <p className="home-greeting">
            <span className="wave" aria-hidden="true">👋</span> Hi there, I'm
          </p>
          <h1 className="home-name">Biswarup Bhattacharjee</h1>

          <div className="home-role">
            <span className="home-role-label">I am a</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="home-type"
            />
          </div>

          <p className="home-desc">
            I build fast, accessible, and beautiful web applications using
            modern technologies like React, Node.js, and Firebase. I love
            turning complex problems into simple, elegant solutions.
          </p>

          <div className="home-buttons">
            <a href="#works" className="btn btn-primary">
              View My Work <FiArrowRight size={18} />
            </a>
            <a
              href="/Biswarup_Resume.pdf"
              className="btn btn-outline"
              download
            >
              <FiDownload size={18} /> Resume
            </a>
          </div>

          <div className="home-socials" aria-label="Social links">
            <a
              href="https://github.com/biswarup14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/biswarup-bhattacharjee-2a836019a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            
          </div>
        </div>

        <div className="home-visual">
          <div className="home-avatar-wrapper">
            <div className="home-code-card">
              <div className="code-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="file-name">developer.js</span>
              </div>
              <pre>
                <code>
                  <span className="kw">const</span>{" "}
                  <span className="fn">developer</span> = {"{"}
                  {"\n  "}name: <span className="str">"Biswarup"</span>,
                  {"\n  "}role: <span className="str">"Full Stack"</span>,
                  {"\n  "}skills: [<span className="str">"React"</span>,{" "}
                  <span className="str">"Node"</span>, <span className="str">"dotNet"</span>],
                  {"\n  "}coffee: <span className="bool">true</span>,
                  {"\n  "}challenge: <span className="fn">"always learning"</span>,
                  {"\n}"};
                </code>
              </pre>
            </div>

            <div className="home-avatar-glow"></div>
          </div>

          <div className="home-stats">
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Coffee Cups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
