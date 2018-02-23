import React from 'react';



export default class VideoControls extends React.Component {
  constructor() {
    super();
    this.state = {
      target: {}
    }
  }

  play() {
    this.target = document.getElementById(this.props.target)
    this.target.play();
    this.target.addEventListener("timeupdate", () => {
      this.setState({target: this.state.target})
    })
    this.setState({target: this.target})
  }

  pause() {
    this.target = document.getElementById(this.props.target)
    this.target.pause();
  }

  updateTime(e) {
    const newState = Object.assign({}, this.state);
    newState.target.currentTime = e.target.value;
    this.setState(newState);
  }

  updateVolume(e) {
    const newState = Object.assign({}, this.state);
    newState.target.volume = e.target.value;
    this.setState(newState);
  }

  render () {
    return (
      <div className="video-controls">
        <div id="video-controls">
          <button className="btn" onClick={this.play.bind(this)}><i className="fa fa-play"></i></button>
          <button className="btn" onClick={this.pause.bind(this)}><i className="fa fa-pause"></i></button>
          <input type="range" min="0" max={this.state.target.duration} onChange={this.updateTime.bind(this)} value={this.state.target.currentTime || 0}/>
          <input type="range" min="0" max="1" onChange={this.updateVolume.bind(this)} value={this.state.target.volume || 1}/>
        </div>
      </div>  
    )
  }
}
