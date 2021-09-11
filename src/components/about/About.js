import React from 'react';


const man1 = require("../../images/man1.jpg").default;
const man2 = require("../../images/man2.jpg").default;
const man3 = require("../../images/man3.jpg").default;


const About = () => {
    return (
        <>
            <h2  id="about">Nasz zespół</h2> 
            <div className="container about">
               
                <article>
                    <img className="aboutImages" src={man1}></img>
                    <h3>Joe</h3>
                    <p>Zawodowo auto detailingiem zajmuje się od pięciu lat. Miłość do motoryzacji zaszczepił we mnie mój dziadek, który posiadał własy warsztat samochodowy. Jako nastolatek udoskonalałem pracę dziadka przez "doczyszczanie" naprawionych aut. Po kilku latach ciężkiej pracy i masie odbytych szkoleń mogę stwierdzić, że jestem profesjonalistą. </p>
                </article>
                <article>
                    <img className="aboutImages" src={man2}></img>
                    <h3>Peter</h3>
                    <p>W ciągu 10 letniej kariery udało mi się doprowadzić do perfekcji setki aut. Pierwsze kroki w branży stawiałem pracując na myjni w Miami, ale nie dawało mi to 100% satysfakcji wiedziałem, że w każdym z tych samochodów tkwi o wiele większy potencjał. Dlatego postanowiłem zająć się auto detailingiem, żeby każde auto mogło wyglądać jak świeżo odebrane z salonu.</p>
                </article>
                <article>
                    <img  className="aboutImages" src={man3}></img>
                    <h3>Quaqmaire</h3>
                    <p>Pasjonuję się motoryzacją lat 80. Potrafię sprawić, że samochód odzyskuje dawny blask jak za czasów swojej świetności. Specjalizuję się w renowacji wnętrz pojazdów, żadna niedoskonałość nie jest w stanie się przede mną ukryć. Auto detailingiem zajmuję się od 7 lat, ale nie spoczywam na laurach cały czas biorąc udział w szkoleniach i warsztatach.</p>
                </article>
            </div>
        </>
    );
};

export default About;