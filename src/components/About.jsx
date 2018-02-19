import React from 'react';
import BaseComponent from './BaseComponent.jsx';


export default class Projects extends BaseComponent {
  constructor() {
    super("Projects")
  }

  render () {
    return (
      <div>
        {this.getBackGround()}
        <div className="container-pink col-md-12"></div>
      </div>
    )
  }
}
