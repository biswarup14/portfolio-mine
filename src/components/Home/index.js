import { Link } from "react-router-dom";
import TextAnimation from "react-animate-text";
import ParticlesBg from "particles-bg";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <ParticlesBg type="polygon" bg={true} />

      <div className="title">
        <h1>
          <TextAnimation>
            <p>Hi, myself</p>
            <p>Biswarup Bhattacharjee </p>
            <br />

            <p>I am,</p>
            <p>Web Developer</p>
          </TextAnimation>
        </h1>

        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>

      <div className="person">
        <img
          src="https://avatars.githubusercontent.com/u/60690698?v=4"
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
