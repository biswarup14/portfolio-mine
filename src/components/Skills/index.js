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
  SiCsharp,
  SiDotnet,
  SiCloudflarepages,
  SiJupyter,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiVisualstudio,
  SiTypescript,
} from "react-icons/si";
import useInView from "../../hooks/useInView";
import "./style.css";

const languageSkills = [
  { icon: SiCplusplus, name: "C++", level: 80 },
  { icon: SiDotnet, name: "Dotnet", level: 85 },
  { icon: SiDotnet, name: "Dotnet MVC", level: 80 },
  { icon: SiDotnet, name: "Dotnet Core", level: 75 },
  { icon: SiC, name: "C", level: 80 },
  { icon:SiCsharp, name: "C#", level: 75},
  { icon: SiJavascript, name: "JavaScript", level: 90 },
  { icon: SiHtml5, name: "HTML", level: 92 },
  { icon: SiCss3, name: "CSS / CSS3", level: 88 },
  { icon: SiReact, name: "React", level: 88 },
  { icon: SiNodedotjs, name: "Node.js", level: 82 },
  { icon:SiTypescript , name: "TypeScript", level: 70},
];

const toolSkills = [
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostgresql  , name: "PostgreSQL" },
  { icon: SiVisualstudiocode, name: "VS Code" },
  { icon: SiJupyter, name: "Jupyter Notebook" },
  { icon: SiMicrosoftsqlserver, name: "SQL Server" },
  { icon: SiCloudflarepages, name: "Cloudflare" },
  { icon: SiVisualstudio, name: "Visual Studio" },
];

const Skills = () => {
  const [gridRef, gridInView] = useInView();
  const [toolsRef, toolsInView] = useInView();

  return (
    <section className="skills">
      <div className="page-header reveal">
        <span className="page-tag">&lt;skills /&gt;</span>
        <h1>Skills</h1>
        <p>Technologies and tools I use to bring ideas to life.</p>
      </div>

      <div className="skills-container">
        <div className="skills-section" ref={gridRef}>
          <h2 className="skills-title">
            <span className="skills-badge">01</span> Languages &amp; Frameworks
          </h2>
          <div className={`skills-grid ${gridInView ? "in-view" : ""}`}>
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
                  <div
                    className="skill-bar-fill"
                    style={{ width: gridInView ? `${level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section" ref={toolsRef}>
          <h2 className="skills-title">
            <span className="skills-badge">02</span> Tools &amp; Technologies
          </h2>
          <div className={`tools-grid ${toolsInView ? "in-view" : ""}`}>
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
