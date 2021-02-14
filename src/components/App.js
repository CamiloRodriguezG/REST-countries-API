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
      <div className="inside-root">
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
        {this.state.darkMode && (
          <footer className="footer dark-footer">
            <p>Developed by Camilo Rodriguez for a FrontEndMentor Challenge</p>
            <div className="contacts-footer contacts-dark">
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/CamiloRodriguezG">
                    <i class="fab fa-github-alt"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/Camilo13078226">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://codepen.io/camilorodriguezg">
                    <i class="fab fa-codepen"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        )}
        {!this.state.darkMode && (
          <footer className="footer">
            <p>Developed by Camilo Rodriguez for a FrontEndMentor Challenge</p>
            <div className="contacts-footer">
              <ul>
              <li>
                  <a target="_blank" href="https://github.com/CamiloRodriguezG">
                    <i class="fab fa-github-alt"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/Camilo13078226">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://codepen.io/camilorodriguezg">
                    <i class="fab fa-codepen"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        )}
      </div>
    );
  }
}

export default App;
