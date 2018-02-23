import React from 'react';
import VideoControls from "./VideoControls.jsx";


export default class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render () {
    return (
      <div className="video-wrapper">
        <video id="video-player" src={this.props.src}>
        
        </video>
        <VideoControls target="video-player"/> 
      </div>  
    )
  }
}
