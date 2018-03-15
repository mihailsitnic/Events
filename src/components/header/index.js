import React, { Component, Fragment } from 'react';
import './styles.css';
import blackLogo from '../../img/logo-black.png';
import Menu from '../menu';

class Header extends Component {
    state = {
        navLiCaption: 'b',
        menuBt: false
    };
    setCaption = id => this.setState({ navLiCaption: id });
    render() {
        const { navLiCaption, menuBt } = this.state;
        return (
            <Fragment>
              <header className="header">
                  <div className="header-wrap">

                      {/* Header Logo */}
                      <a href="./" className="header__logo">
                          <img src={blackLogo} alt="logo" />
                      </a>

                      {/* Header Navigation */}
                      <nav className="header-nav">
                          <ul className="header-nav__list">
                              <li className={`header-nav__li ${navLiCaption === "a" ? "header-nav__li--active" : ""}`}>
                                  <a
                                      onClick = {() => this.setCaption("a")}
                                      className="header-nav__link"
                                      href="javascript:void(0)">Team</a>
                              </li>
                              <li className={`header-nav__li ${navLiCaption === "b" ? "header-nav__li--active" : ""}`}>
                                  <a
                                      onClick = {() => this.setCaption("b")}
                                      className="header-nav__link"
                                      href="javascript:void(0)">Events</a>
                              </li>
                              <li className={`header-nav__li ${navLiCaption === "c" ? "header-nav__li--active" : ""}`}>
                                  <a
                                      onClick = {() => this.setCaption("c")}
                                      className="header-nav__link"
                                      href="javascript:void(0)">Careers</a>
                              </li>
                          </ul>
                      </nav>

                      {/* Header Menu */}
                      <button
                          onClick = {this.handleMenuBt}
                          className = {menuBt ? "header-menu__bt header-menu__bt--active" : "header-menu__bt"}>
                          <span>&nbsp;</span>
                      </button>
                  </div>
              </header>
              <Menu menuBt = {menuBt} />
        </Fragment>
        );
  }

  handleMenuBt = () => {
      this.setState({
          menuBt: !this.state.menuBt
      })
  }
}

export default Header;
