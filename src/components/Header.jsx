import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super()
  }

  render () {
    const items = this.props.items || []
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          {items.map((navItem, index) => {
              return (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={"/#/" + navItem.href}>{navItem.displayName}</a>
                </li>    
              )
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
