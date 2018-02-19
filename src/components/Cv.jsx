import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';



export default class Cv extends BaseComponent {
  constructor() {
    super("Cv")
    this.state = {
      textContent: []
    }
  }

  render () {
    return (
      <div className="container-pink col-md-12">
        {this.getBackGround()}
        <h1>Bajs</h1>
      </div>  
    )
  }
}
