import React from 'react';

class Nav extends React.Component {
  render() {
    let sourse = this.props.sourse;
    return (
      <nav>
        <ul>
          {Object.keys(sourse).map(elem => <li><a href={sourse[elem]}>{elem}</a></li>)}
        </ul>
      </nav>
    );
  }
}

export default Nav;