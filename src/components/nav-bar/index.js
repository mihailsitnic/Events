import React, { Component } from 'react';
import './styles.css';
import iconSearch from '../../img/icons/icon-search.png';
import iconSearchActive from '../../img/icons/icon-search--active.png';

class NavBar extends Component {
    state = {
        navLiCaption: 'a'
    };
    setCaption = id => this.setState({ navLiCaption: id });
    render() {
        const { navLiCaption } = this.state;
        const { onDateActive, onSearchActive } = this.props;

        // Search Icon Toggle
        const searchIcon = this.state.navLiCaption === 'f' ?
        <img src={iconSearchActive} alt="search" /> :
        <img src={iconSearch} alt="search" />;

        return (
            <section className="nav-bar">
                <div className="wrapper">
                    <nav className="nav-bar__nav">

                        {/* Navigation List */}
                        <ul className="nav-bar__list">
                            <li className={`nav-bar__li
                                ${navLiCaption === "a" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("a")}
                                    className="nav-bar__link"
                                    href="javascript:void(0)">Amsterdam</a>
                            </li>
                            <li className={`nav-bar__li
                                ${navLiCaption === "b" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("b")}
                                    className="nav-bar__link"
                                    href="javascript:void(0)">Barcelona</a>
                            </li>
                            <li className={`nav-bar__li
                                ${navLiCaption === "c" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("c")}
                                    className="nav-bar__link"
                                    href="javascript:void(0)">Madrid</a>
                            </li>
                            <li className={`nav-bar__li
                                ${navLiCaption === "d" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("d")}
                                    className="nav-bar__link"
                                    href="javascript:void(0)">New York</a>
                            </li>
                            <li
                                onClick = {onDateActive}
                                className={`nav-bar__li
                                ${navLiCaption === "e" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("e")}
                                    className="nav-bar__link">Date</a>
                            </li>
                            <li
                                onClick = {onSearchActive}
                                className={`nav-bar__li
                                ${navLiCaption === "f" ? "nav-bar__li--active" : ""}`}>
                                <a
                                    onClick = {() => this.setCaption("f")}
                                    className="nav-bar__link">
                                    {searchIcon}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default NavBar;
