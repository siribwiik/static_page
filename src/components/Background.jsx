import React from 'react';


export default class Background extends React.Component {
  constructor() {
    super()

  }

  getType() {
    let background;
    switch(this.props.type){
      case "video":
        background = <video loop autoPlay muted 
        src={this.props.reference} className={"video-background"} />;
        break;
      case "image":  
        background = <img src={this.props.reference} className={"image-background"} />
        break;
      case "color":
        console.log("color")
        background = <div style={{backgroundColor: this.props.reference}} className="color-background"></div>
        break
      default:
        background = null;
        break;
    }
    return background
  }

  render () {
    console.log("gettype", this.getType())
    return this.getType();
  }
}
