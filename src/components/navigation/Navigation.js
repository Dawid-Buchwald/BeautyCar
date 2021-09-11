import React from 'react';

const icon = require("../../images/icon.svg").default;

const Navigation = () => {
    return (
        <>
            <div className="container navigation">
                <a className="logo" href="#">
                    <span className="logoSpanFirst">Beauty</span>
                    <img className="icon" src={icon} alt="ikona gąbki"/>
                    <span className="logoSpanSecond">Car</span>
                </a>
                <ul>
                    <li className="navLi"><a href="#header">Strona główna</a></li>
                    <li className="navLi"><a href="#about">O nas</a></li>
                    <li className="navLi"><a href="#offer">Usługi</a></li>
                    <li className="navLi"><a href="#portfolio">Portfolio</a></li>
                    <li className="navLi"><a href="#contact">Kontakt</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;