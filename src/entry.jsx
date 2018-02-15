import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Index from "./components/Index.jsx"
import BaseComponent from "./components/BaseComponent.jsx"


const axios = require("axios");
const style = require("!style-loader!css-loader!sass-loader!./styles/main.scss");

const components = {
  Index: Index
}

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
            component={components[item.component]}/>
  }

  render () {
    const headerItems = this.state.header.items || [];
    return(
      <div>
        <Header items={headerItems} />
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
