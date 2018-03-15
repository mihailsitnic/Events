import React from 'react';
import './styles.css';
import logoFooter from '../../img/logo-footer.png';
import iconIn from '../../img/icons/icon-in.png';
import iconMe from '../../img/icons/icon-me.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">

                {/* Footer Nav */}
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="col-3 footer__nav-li">
                            <a className="footer__nav-link" href="javascript:void(0)">Amsterdam HQ</a>
                        </li>
                        <li className="col-3 footer__nav-li">
                            <a className="footer__nav-link" href="javascript:void(0)">Barcelona</a>
                        </li>
                        <li className="col-3 footer__nav-li">
                            <a className="footer__nav-link" href="javascript:void(0)">Madrid</a>
                        </li>
                        <li className="col-3 footer__nav-li">
                            <a className="footer__nav-link" href="javascript:void(0)">New York</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Footer Metasocial */}
            <section className="footer__metasocial">
                <div className="wrapper">
                    <div className="metasocial-wrap">
                        <div className="metasocial__social">
                            {/* Social */}
                            <ul className="social__list">
                                <li className="social__li">
                                    <a className="social__link" href="https://www.linkedin.com" target="_blank">
                                        <img className="social__img" src={iconIn} />
                                    </a>
                                </li>
                                <li className="social__li">
                                    <a className="social__link" href="" target="_blank">
                                        <img className="social__img" src={iconMe} />
                                    </a>
                                </li>
                            </ul>

                            {/* Lang Select */}
                            <div className="metasocial__lang">
                                <a className="lang" href="javascript:void(0)">English</a>
                                <span className="lang__arrow" />
                            </div>
                        </div>

                        {/* Lang Select */}
                        <div className="metasocial__logo">
                            <a href="./">
                                <img src={logoFooter} alt="logo" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="metasocial__copyright">
                            <p>© YGROUP companies 2017</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
