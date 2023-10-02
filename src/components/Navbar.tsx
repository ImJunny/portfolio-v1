import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import "../App.css";

type CustomLinkProps = {
  to: string;
  children: string;
};

function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <ScrollLink
      className="link"
      to={to}
      spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      activeStyle={{ color: "rgb(179, 35, 179)" }}
    >
      {children}
    </ScrollLink>
  );
}

export default function Navbar() {
  return (
    <div className="nav">
      <h1>John Nguyen</h1>
      <CustomLink to="main">Home</CustomLink>
      <CustomLink to="about">About Me</CustomLink>
      <CustomLink to="projects">Projects</CustomLink>
      <div className="theme-button" />
    </div>
  );
}
