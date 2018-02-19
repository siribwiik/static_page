// should get appropriate props for every component based on route?
import React from 'react';
import Background from "./Background.jsx"
const axios = require("axios");

export default class BaseComponent extends React.Component {
  constructor(name) {
    super()
    name: name;
    this.state = {
      textContent: {}
    };
  }

  getProps() {
    if(this.state.header){
      const props = this.state.header.items.filter((item) => {
        return item.href === this.props.match.path.replace("/", "");
      }).map((item) => {
        return item.props;
      })
      return props[0]
    }
    return null;
  }

  getBackGround() {
    const props = this.getProps();
    if(props) {
      return <Background fallback={props.background.fallback} reference={props.background.reference} type={props.background.type}/>
    }
  }

  componentWillMount() {
    axios.get("/lib/config.json").then((res) => {
      axios.get("/lib/" + res.data.textContent).then((textContent) => {
        this.setState(Object.assign(res.data, {textContent: textContent.data}))
      })
    });
  }
}
