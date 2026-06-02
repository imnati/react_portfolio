import "./Projects.css";
import Card from "../../components/Card/Card";

function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="projects">
        <Card title="Portfolio Website" description="Built using React." />

        <Card title="Task Manager" description="Task management app." />

        <Card title="Weather App" description="Weather forecast application." />
      </div>
    </div>
  );
}

export default Projects;
