import Project from "./Project/Project";


function Projects (projects) {
    return(
        <div className="row" data-aos="fade-up">
          <Project project={projects.projects[0]}/>
          <Project project={projects.projects[1]}/>
        </div>
    )
}

export default Projects;