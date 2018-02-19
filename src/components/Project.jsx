import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import VideoPlayer from "./VideoPlayer.jsx";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class Project extends BaseComponent {
  constructor() {
    super("Project")
  }

  render () {
    const project = this.state.textContent && this.state.textContent.projects? this.state.textContent.projects.filter((project) => {
      return project.name === this.props.match.params.id
    })[0] : {}
    const videos = project.videos || [];
    const images = project.images || [];
    const text = project.text || [];
    return (
      <div className="container-pink col-md-12">
        <div className="project-header">
          <h2 className="">{project.title}</h2>
          <p className="font-italic">{project.type}</p>
        </div>
        {this.getBackGround()}
        <div className="row">
          <div className="carousel-wrapper col-md-8">
            <Carousel autoPlay={true} showIndicators={true} showThumbs={false} showStatus={false}>
              {images.map((image, index) => {
                return (
                  <div>
                    <img className="card-img-top" src={image} key={"img-" + index}/>
                  </div>
                  )
              })}
            </Carousel>
            {videos.map((video, index) => {
              return (
                  <VideoPlayer src={video} /> 
              )
            })}
          </div>
          <div className="col-md-4">
            {text.map((paragraph, index) => {
              return <p key={"paragraph" + index}>{paragraph}</p>
            })}
          </div>
        </div >
      </div>  
    )
  }
}
