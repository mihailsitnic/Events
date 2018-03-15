import React, { Component } from 'react';
import './styles.css';
import Truncate from 'react-truncate';
import spriteIn from '../../img/icons/sprite-linkedin.png';
import spriteFb from '../../img/icons/sprite-facebook.png';
import spriteTw from '../../img/icons/sprite-twitter.png';
import cGoogle from '../../img/icons/c-google.png';
import cApple from '../../img/icons/c-apple.png';
import cOutlook from '../../img/icons/c-outlook.png';
import cCalendar from '../../img/icons/c-calendar.png';

class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;

        // Details Button Toggle
        const calendarDetails = this.state.isOpen &&
        <ul className="calendar-details">
            <li className="calendar-details__li">
                <a
                    className="calendar-details__link"
                    href="https://calendar.google.com"
                    target="_blank">
                    <img
                        className="calendar-details__icon"
                        src={cGoogle}
                        alt="google" />
                    Google Calendar
                </a>
            </li>
            <li className="calendar-details__li">
                <a
                    className="calendar-details__link"
                    href="https://www.icloud.com"
                    target="_blank">
                    <img
                        className="calendar-details__icon"
                        src={cApple}
                        alt="apple" />
                    Apple Calendar
                </a>
            </li>
            <li className="calendar-details__li">
                <a
                    className="calendar-details__link"
                    href="https://outlook.live.com"
                    target="_blank">
                    <img
                        className="calendar-details__icon"
                        src={cOutlook}
                        alt="outlook" />
                    Outlook.com
                </a>
            </li>
            <li className="calendar-details__li">
                <a
                    className="calendar-details__link"
                    href="">
                    <img
                        className="calendar-details__icon"
                        src={cCalendar}
                        alt="calendar" />
                    Other Calendar
                </a>
            </li>
        </ul>;

        return (
            <li className="article__li">
                <div className="article__img">
                    <img src={article.img} alt="img" />
                </div>
                <div className="article__info">

                    {/* Title */}
                    <h2 className="article__info-title">
                        <Truncate lines={1}>
                            {article.title}
                        </Truncate>
                    </h2>

                    {/* Description */}
                    <p className="article__info-description">
                        <Truncate lines={6}>
                            {article.description}
                        </Truncate>
                    </p>

                    {/* Sprites */}
                    <ul className="article__info-sprites">
                        <li className="info-sprites__li">
                            <a
                                className="info-sprites__link"
                                href="https://www.linkedin.com"
                                target="_blank">
                                <img src={spriteIn} alt="linkedin" />
                            </a>
                        </li>
                        <li className="info-sprites__li">
                            <a
                                href="https://www.facebook.com/"
                                className="info-sprites__link"
                                target="_blank">
                                <img src={spriteFb} alt="facebook" />
                            </a>
                        </li>
                        <li className="info-sprites__li">
                            <a
                                href="https://twitter.com/"
                                className="info-sprites__link"
                                target="_blank">
                                <img src={spriteTw} alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="article__date">
                    <ul className="date-list">
                        <li className="date-li">
                            <p className="date__date">{article.date.toDateString()}</p>
                        </li>
                        <li className="date-li">
                            <p className="date__price">{article.price}</p>
                        </li>
                        <li className="date-li">
                            <p className="date__time">{article.time}</p>
                        </li>
                    </ul>

                    {/* Details Button */}
                    <div className="article-calendar">
                        <button
                            onClick = {this.handleCalendar}
                            className = {this.state.isOpen ?
                                'calendar__bt calendar__bt--active' :
                                'calendar__bt'}>Add to calendar</button>
                        {calendarDetails}
                    </div>

                </div>
            </li>
        )
    }

    handleCalendar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;
