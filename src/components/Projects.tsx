import "../App.css";
import aa3 from "../images/aa3.png";

type ProjectInfoProps = {
  title: string;
  source: string;
  children: string;
};

function ProjectInfo({ title, source, children }: ProjectInfoProps) {
  return (
    <div className="project-container">
      <img src={source} />
      <div className="project-info">
        <h1>{title}</h1>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="section projects">
      <div className="card">
        <ProjectInfo title="Audio Aura" source={aa3}>
          This app is my first full-stack application.
        </ProjectInfo>
      </div>
    </div>
  );
}
