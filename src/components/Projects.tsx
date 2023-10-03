import "../App.css";
import aa1 from "../images/aa1.png";
import aa2 from "../images/aa2.png";
import dd1 from "../images/dd1.png";
import dd2 from "../images/dd2.png";
import Button from "../components/Button.tsx";

type ProjectInfoProps = {
  title: string;
  image: string;
  children: string;
  source: string;
  imageOver: string;
};

function ProjectInfo({
  title,
  image,
  imageOver,
  children,
  source,
}: ProjectInfoProps) {
  return (
    <div className="project-info">
      <img src={imageOver} className="over" />
      <img src={image} className="under" />
      <div className="project-info-text">
        <h1>{title}</h1>
        <h2>{children}</h2>
        <Button source={source}>Visit</Button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="section projects">
      <div className="card">
        <div className="project-container">
          <ProjectInfo
            title="Audio Aura"
            image={aa1}
            imageOver={aa2}
            source="https://audioaura.onrender.com"
          >
            This website is my first full-stack application. It was built using
            React and NodeJS. Inspired by Spotify Wrapped, this app uses the
            Spotify API to gather and display user data in an interesting way.
          </ProjectInfo>
          <ProjectInfo
            title="Dangle Dood"
            image={dd1}
            imageOver={dd2}
            source="https://dangledood.netlify.app"
          >
            This game is simply Hangman, hence the name "Dangle Dood". This is
            my first comprehensive Javascript project which allowed me to
            understand how to manipulate the DOM. I used the Random Word API
            through NodeJS to update words.
          </ProjectInfo>
        </div>
      </div>
    </div>
  );
}
