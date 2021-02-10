import "./styles/App.css";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  darkModeOn() {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  }
  render() {
    return (
      <div id="inside-root">
        {this.state.darkMode && (
          <div className="navbar nav-dark">
            <p>Where in the world</p>
            <button
              className="dark-mode-switch btn-dark"
              onClick={this.darkModeOn.bind(this)}
            >
              <i className="far fa-moon moon-dark btn-font-dark-mode"></i>
              <p className="btn-font-dark-mode">Dark mode</p>
            </button>
          </div>
        )}
        {!this.state.darkMode && (
          <div className="navbar">
            <p>Where in the world</p>
            <button
              className="dark-mode-switch"
              onClick={this.darkModeOn.bind(this)}
            >
              <i className="far fa-moon"></i>
              <p>Dark mode</p>
            </button>
          </div>
        )}
        <MainContainer darkMode={this.state.darkMode} />
      </div>
    );
  }
}

export default App;
