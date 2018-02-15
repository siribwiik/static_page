import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';


export default class Index extends BaseComponent {
  constructor() {
    super("Index")
    this.state = {
      textContent: null
    }
  }

  render () {
    return (
      <div>
        {this.getBackGround()}
      </div>  
    )
  }
}
