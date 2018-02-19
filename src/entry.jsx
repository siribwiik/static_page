import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header.jsx";
import BaseComponent from "./components/BaseComponent.jsx"

import components from "./componentRegistry.jsx";


const axios = require("axios");
const style = require("!style-loader!css-loader!sass-loader!./styles/main.scss");

class App extends BaseComponent {

  constructor() {
    super();
    this.state = {
      header: {
        items: []
      },
      background: {

      },
      textContent: null
    };
  }

  getRoutes(item, index) {
    return <Route key={index} exact path={"/" + item.href} 
            component={components.components[item.component]}/>
  }

  render () {
    const headerItems = this.state.header.items || [];
    const routes = this.state.header.routes || [];
    const headerClass = this.state.header.props ? this.state.header.props.alignment : "";
    return(
      <div>
        <Header items={headerItems} class={headerClass} />
        <div className="container" id="content">
          {headerItems.map(this.getRoutes)}
        </div>
      </div>
    );
  }
}



render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'))
