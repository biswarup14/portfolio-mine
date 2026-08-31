import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./style.css";

const languageSkills = [
  { icon: FaJava, name: "Java", level: 85 },
  { icon: SiCplusplus, name: "C++", level: 80 },
  { icon: SiC, name: "C", level: 78 },
  { icon: SiJavascript, name: "JavaScript", level: 90 },
  { icon: SiHtml5, name: "HTML", level: 92 },
  { icon: SiCss3, name: "CSS / CSS3", level: 88 },
  { icon: SiReact, name: "React", level: 88 },
  { icon: SiNodedotjs, name: "Node.js", level: 82 },
];

const toolSkills = [
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVisualstudiocode, name: "VS Code" },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="page-header">
        <span className="page-tag">&lt;skills /&gt;</span>
        <h1>Skills</h1>
        <p>Technologies and tools I use to bring ideas to life.</p>
      </div>

      <div className="skills-container">
        <div className="skills-section">
          <h2 className="skills-title">
            <span className="skills-badge">01</span> Languages &amp; Frameworks
          </h2>
          <div className="skills-grid">
            {languageSkills.map(({ icon: Icon, name, level }, i) => (
              <div
                className="skill-card"
                key={name}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="skill-card-head">
                  <Icon size={26} className="skill-icon" />
                  <span className="skill-name">{name}</span>
                  <span className="skill-level">{level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skills-title">
            <span className="skills-badge">02</span> Tools &amp; Technologies
          </h2>
          <div className="tools-grid">
            {toolSkills.map(({ icon: Icon, name }) => (
              <div className="tool-card" key={name}>
                <Icon size={28} className="tool-icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
