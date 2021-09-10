import React from 'react';

const facebook = require("../../images/facebook.png").default;
const instagram = require("../../images/instagram.png").default;

const Footer = () => {
    return (
        <>
            <footer className="container footer">
                <p>D&B</p>
                <a href="https://www.facebook.com/" target="_blank"><img className="footerIcon" src={facebook} alt="ikona facebooka"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img className="footerIcon" src={instagram} alt="ikona instagrama"/></a>
            </footer>
        </>
    );
};

export default Footer;


