import React, { Component, Fragment } from 'react';
import './styles.css';
import menuBurger from '../../img/menu-bg.png';

class Menu extends Component {
    render() {
        const menuProp = this.props;
        return (
            <Fragment>
                <div className = {menuProp.menuBt ? "menu-overlay menu-overlay--active" : "menu-overlay"} />
                <div className = {menuProp.menuBt ? "menu-burger menu-burger--active" : "menu-burger"}>
                    <img src={menuBurger} className="menu-burger__img" />
                    <div className="menu-burger__container">
                        <ul className="menu-burger__list">
                            <li className="menu-burger__li">
                                <a className="menu-burger__link" href="">Team</a>
                            </li>
                            <li className="menu-burger__li">
                                <a className="menu-burger__link" href="">Events</a>
                            </li>
                            <li className="menu-burger__li">
                                <a className="menu-burger__link" href="">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Menu;
