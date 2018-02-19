import React from 'react';
import VideoControls from "./VideoControls.jsx";


export default class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  setTarget(e) {
    this.setState({target: e.target})
  }

  render () {
    return (
      <div className="video-wrapper">
        <video onMouseEnter={this.setTarget.bind(this)} src={this.props.src}>
        
        </video>
        <VideoControls target={this.state.target}/> 
      </div>  
    )
  }
}
