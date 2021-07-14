import React, { Component } from "react";
import Card from '../components/card'
import projects from '../projects.json';


class Projects extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div>
            <h1 className='text-center p-2'>Projects</h1> 
                {this.state.projects.map(project => (
                    <Card
                    id={project.id}
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    github={project.github}
                    url={project.url}
                    />
                ))}
            </div>
        );
    }
}

export default Projects;