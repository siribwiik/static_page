import React from 'react';
import BaseComponent from './BaseComponent.jsx';


export default class About extends BaseComponent {
  constructor() {
    super("Projects")
  }

  render () {
    const textContent = this.state.textContent.about ? this.state.textContent.about[0] : {text: []};
    return (
      <div>
        {this.getBackGround()}
        <div className="container-pink row col-md-12">
          <div className="col-md-6">
            <h4 className="col-md-12">{textContent.title}</h4>
            <h6 className="col-md-12">{textContent.secondTitle}</h6>
            {textContent.text.map((paragraph, index) => {
              return <p key={"paragraph" + index}>{paragraph}</p>
            })}
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={textContent.image} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
