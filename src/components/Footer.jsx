import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <hr />
        <div className="content has-text-centered">
          <p>
            <strong>React ToDo app</strong> by{" "}
            <a href="https://nacersalaheddine.github.io/">
              Salah eddine. Nacer
            </a>
            . Source code is available in
            <a href="http://github.com/nacersalaheddine/react-todo-app">
              {"/ "}
              GitHub 😘
            </a>
            . .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
