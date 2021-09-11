import React from 'react';

const facebook = require("../../images/facebook-white.png").default;
const instagram = require("../../images/instagram-white.png").default;

const Footer = () => {
    return (
        <>
            <footer className="container footer">
                <p>D&B</p>
                <div>
                    <a href="https://www.facebook.com/" target="_blank"><img className="footerIcon" src={facebook} alt="ikona facebooka"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img className="footerIcon" src={instagram} alt="ikona instagrama"/></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;


