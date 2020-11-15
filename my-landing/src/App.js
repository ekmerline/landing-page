import React from 'react'
import './App.css'
import Project from "./components/Project"
import projectData from "./data/project-data"

class App extends React.Component {

state ={
  projects: projectData
}



  render() {

    const { projects } = this.state

    return (
      <div className="app">
        <div>
          <h2>About Me</h2>
          <p>Insert stuff about me here.</p>
        </div>
        <div>
          {projects.map((project, index) => 
          <Project 
            projectName={project.title} 
            image={project.image} 
            description={project.description} 
            link={project.linkWeb} 
            gitLink={project.linkCode} 
            key={index}
            >
          </Project>
          )}
        </div>
      </div>
    )
  }
}
export default App
