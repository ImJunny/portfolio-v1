import { Link } from "react-scroll";
import "../App.css";
import linkedinSVG from "../images/linkedin.svg";
import githubSVG from "../images/github.svg";
import mail from "../images/mail.png";

type CustomLinkProps = {
  to: string;
  children: string;
};

function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link
      className="link"
      to={to}
      spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      activeStyle={{ color: "rgb(179, 35, 179)" }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="nav">
      <h1>John Nguyen</h1>
      <CustomLink to="main">Home</CustomLink>
      <CustomLink to="about">About Me</CustomLink>
      <CustomLink to="projects">Projects</CustomLink>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <span
        className="material-symbols-outlined"
        onClick={() => {
          window.open("mailto:johnnguyen4501@gmail.com?subject=&body=");
        }}
      >
        mail
      </span>
    </div>
  );
}
