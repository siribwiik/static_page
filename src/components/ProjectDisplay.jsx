import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class ProjectDisplay extends BaseComponent {
  constructor() {
    super("Project")
  }

  filterFunction(item) {
    return item.section === this.props.section;
  }

  render () {
    const projects = this.state.textContent.projects ? this.state.textContent.projects : [];
    return (
      <div className="container">
        <h4>{this.props.section}</h4>
        <div className="row">
          {projects.filter(this.filterFunction.bind(this)).map((project, index) => {
            return(
              <div key={"projectdisplay" + index} className="overlay-wrapper col-md-3">
                <a href={"/#/project/" + project.name}><img className="img-fluid image" src={project.images[0]} key={"img" + index}/></a>
                <a href={"/#/project/" + project.name}><div className="overlay col-md-12">
                  <h4 className="project-display-heading">{project.title}</h4>
                  <p>{project.type}</p>
                  <span>{project.year}</span>
                </div></a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
