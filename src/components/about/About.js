import React from 'react';


const man1 = require("../../images/man1.jpg").default;
const man2 = require("../../images/man2.jpg").default;
const man3 = require("../../images/man3.jpg").default;


const About = () => {
    return (
        <>
            <div className="container about">
                <article>
                    <img className="aboutImages" src={man1}></img>
                    <h3>Joe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada, nisl ac cursus consectetur, augue ex dapibus nisi, nec porta nisl diam sed lacus. Ut sed mauris ac est efficitur.</p>
                </article>
                <article>
                    <img className="aboutImages" src={man2}></img>
                    <h3>Peter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada, nisl ac cursus consectetur, augue ex dapibus nisi, nec porta nisl diam sed lacus. Ut sed mauris ac est efficitur.</p>
                </article>
                <article>
                    <img  className="aboutImages" src={man3}></img>
                    <h3>Quaqmaire</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada, nisl ac cursus consectetur, augue ex dapibus nisi, nec porta nisl diam sed lacus. Ut sed mauris ac est efficitur.</p>
                </article>
            </div>
        </>
    );
};

export default About;