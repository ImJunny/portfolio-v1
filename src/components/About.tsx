import "../App.css";

export default function About() {
  return (
    <div className="section about">
      <div className="card">
        <div className="about-container">
          <h1>Hello!</h1>
          <h2>
            My name is John and I am an aspiring software developer. I plan on
            working in full stack.
          </h2>
        </div>
        <div className="buttons-container">
          <a
            href="https://www.linkedin.com/in/john-nguyen-29252021a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/ImJunny" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
