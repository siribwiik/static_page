import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super()
  }

  render () {
    const props = document.store;
    const backgroundColor = this.props.props ? this.props.props.backgroundColor : "none";
    const items = this.props.items || [];
    const headerClass = this.props.props ? this.props.props.alignment : "left";
    console.log("header", props)
    return (
      <nav style={{backgroundColor: backgroundColor}} className="navbar navbar-expand-lg navbar-light  navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="lightToggle navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className={"navbar-nav mr-auto " + headerClass}>
          {items.map((navItem, index) => {
              if(navItem.displayName){
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={"/#/" + navItem.href}>{navItem.displayName}</a>
                  </li>    
                )
              }
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
