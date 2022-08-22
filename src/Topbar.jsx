import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar" >
        <div className="right">
          <a href="#intro">Home</a>
          <a href="#portfolio">Project</a>
          <a href="#work">Skills</a>
          <a href="#contact">Contact</a>
        </div>
    </div>
  );
}

