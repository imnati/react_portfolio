import "./Home.css";

function Home() {
  return (
    <div className="main">
      <div className="left-section">
        <div className="content">
          <h3>Hello, My Name is</h3>
          <h1>Natnael Akalewold</h1>
          <p>
            I'm a passionate web developer with experience in building dynamic
            and responsive websites. I specialize in React and have a strong
            background in JavaScript, HTML, and CSS. I enjoy creating
            user-friendly interfaces and bringing ideas to life through code.
          </p>
          <button>Contact Me</button>
        </div>
      </div>

      <div className="right-section">
        <img src="https://placehold.co/300" alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
