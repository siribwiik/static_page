import React from 'react';



export default class VideoControls extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedButton: "fa fa-play",
    }
  }

  play() {
    this.props.target.play();
  }

  pause() {
    this.props.target.pause();
  }


  render () {
    const target = this.props.target || {};
    return (
      <div className="video-controls">
        <div id="video-controls">
          <button className="btn" onClick={this.play.bind(this)}><i className="fa fa-play"></i></button>
          <button className="btn" onClick={this.pause.bind(this)}><i className="fa fa-pause"></i></button>
          <input type="range" id="seek-bar" value={target.currentTime} />
        </div>
      </div>  
    )
  }
}
