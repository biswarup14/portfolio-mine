import "./style.css";
import ParticlesBg from "particles-bg";
const About = () => {
  return (
    <div className="contact">
      <ParticlesBg type="cobweb" bg={true} />
      <h1>Contact me!</h1>

      <h4>Phone</h4>
      <p>+91 8420157314</p>

      <h4>Email</h4>
      <p>biswarup14rick@gmail.com</p>

      <h4>Address</h4>
      <p>
        Indrapuri, Deepshilpi Apartment, Belghoria, Kolkata, West Bengal 700056
      </p>
    </div>
  );
};

export default About;
