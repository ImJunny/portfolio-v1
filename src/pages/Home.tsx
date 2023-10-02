import Navbar from "../components/Navbar.tsx";
import About from "../components/About.tsx";
import Projects from "../components/Projects.tsx";
import "../App.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="section main">
          <div className="greeting">
            <h1>
              Welcome to my portfolio. Here you can learn about me and view some
              of my personal projects. (This project is currently under
              development.)
            </h1>
          </div>
        </div>

        <About />
        <Projects />
      </div>
    </>
  );
}
