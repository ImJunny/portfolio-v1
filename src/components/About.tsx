import "../App.css";
import Button from "../components/Button.tsx";

export default function About() {
  return (
    <div className="section about">
      <div className="card">
        <div className="about-container">
          <h1>Hello!</h1>
          <h2>
            My name is John Nguyen and I am an aspiring software developer. I am
            interested in full-stack, so far teaching myself how to use React
            and NodeJS. I plan on learning anything I can with the opportunities
            I may find.
          </h2>
          <h3>Feel free to reach out to me anytime!</h3>
        </div>
        <div className="buttons-container">
          <Button source="https://www.linkedin.com/in/john-nguyen-29252021a/">
            LinkedIn
          </Button>
          <Button source="https://github.com/ImJunny">GitHub</Button>
        </div>
      </div>
    </div>
  );
}
