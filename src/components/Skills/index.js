import "./style.css";
import ParticlesBg from "particles-bg";
const About = () => {
  return (
    <div className="skills">
      <ParticlesBg type="square" bg={true} />
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
          <li>CSS3</li>
          <li>React.js</li>
          <li>Node.js</li>
        </div>

        <div>
          <strong>Tools/Technologies:</strong>
          <li>Es6</li>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>Visual Studio Code</li>
          <li>Git & Github</li>
        </div>
      </div>
    </div>
  );
};

export default About;
