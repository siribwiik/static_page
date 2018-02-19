import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import ProjectDisplay from "./ProjectDisplay.jsx";


export default class Projects extends BaseComponent {
  constructor() {
    super("Index")
    this.state = {
      textContent: []
    }
  }

  render () {
    const projects = this.state.textContent.projects ? this.state.textContent.projects : [];
    return (
      <div>
        {this.getBackGround()}
        <div className="container-pink col-md-12">
          <ProjectDisplay section="solo"/>
        </div> 
        <div className="container-pink col-md-12">
          <ProjectDisplay section="collabs"/>
        </div> 
        <div className="container-pink col-md-12">
          <ProjectDisplay section="collective"/>
        </div>  
      </div>
    )
  }
}
