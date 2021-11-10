import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    let contactArray = this.props.contactArray;
    let addresArray = this.props.addresArray;
    let sourse = this.props.sourse;
    return (
      <div className="App">
        <header className="App-header">
          <Nav sourse = {sourse} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer contactArray={contactArray} addresArray={addresArray}/>
      </div>
    );
  }
}

export default App;
