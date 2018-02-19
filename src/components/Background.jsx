import React from 'react';


export default class Background extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  getType(props) {
    let background;
    if(this.state.useFallback) {
      console.log("use fallback")
    }
    switch(props.type){
      case "video":
        background = <video id="video-background" loop autoPlay muted 
        src={props.reference} className={"video-background"} />;
        break;
      case "image":  
        background = <img src={props.reference} className={"image-background"} />
        break;
      case "webcam":  
        background = <video id="video-background" loop autoPlay muted 
        src={props.reference} className={"video-background"} />;
        break;
      case "color":
        background = <div style={{backgroundColor: props.reference}} className="color-background"></div>
        break
      default:
        background = null;
        break;
    }
    return background
  }

  initUserMedia() {
    navigator.getUserMedia({ audio: false, video: true }, (stream) => {
      navigator.stream = stream;
      document.getElementById("video-background").srcObject = stream;
    }, (error) => {
      if(!this.state.useFallback) {
        this.setState({useFallback: true}) 
      }
    })
  }

  stopCamera() {
    if(navigator.stream) {
      navigator.stream.getTracks()[0].stop();
    }
  }

  render () {
    if(this.props.type === "webcam") {
      this.initUserMedia();
    } else{ 
      this.stopCamera();
    }
    return this.state.useFallback ? this.getType(this.props.fallback) : this.getType(this.props);
  }
}
