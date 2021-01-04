import React, { Component } from "react";
import logo from "../logo.png";
class Nav extends Component {
  state = {
    isActive: false,
  };

  render() {
    return (
      <nav
        className="navbar navbar-start is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div
          id="navbarBasicExample"
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-link is-light">
                  <i className="fa fa-github"></i>
                </a>
                &nbsp;&nbsp;
                <a className="button is-link is-light">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">المزيد...</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">حول</a>
                <a className="navbar-item">التواصل</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">التبليغ عن مشكل</a>
              </div>
            </div>
            <a className="navbar-item">المشاريع</a>
            <a className="navbar-item">الرئيسية</a>
          </div>
        </div>

        <div className="navbar-brand">
          <a
            role="button"
            className={
              this.state.isActive ? "navbar-burger is-active" : "navbar-burger"
            }
            aria-label="menu"
            aria-expanded="true"
            data-target="navbarBasicExample"
            onClick={() => {
              this.setState({ isActive: !this.state.isActive });
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a className="navbar-item" href="#">
            <img src={logo} height="28" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
