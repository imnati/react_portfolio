import "./About.css";

function About() {
  return (
    <div className="page">
      <div className="page-left">
        <img className="page-image" src="https://placehold.co/300" alt="" />
      </div>

      <div className="page-right">
        <div className="page-content">
          <div className="about-heading">
            <div className="red-dot"></div>
            <h1>About Me</h1>
          </div>

          <h1 className="page-title">Who Am I</h1>

          <p className="page-description">
            I'm a passionate web developer with experience in building dynamic
            and responsive websites. I specialize in React and have a strong
            background in JavaScript, HTML, and CSS. I enjoy creating
            user-friendly interfaces and bringing ideas to life through code.
          </p>

          <button className="cv-btn">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
