import React from 'react';
import { Placeholder } from 'react-bootstrap';

const mail = require("../../images/mail.png").default;
const phone = require("../../images/telephone.png").default;
const pin = require("../../images/placeholder.png").default;

const Home = () => {
    return (
       <div className="container  id="contact>
            <div className="contact">
                <div>
                    <h4>Masz pytania lub chciałbyś otrzymać wycenę?</h4>
                    <p className="contactInfo contactParagraph">Napisz do nas lub zadzwoń!</p>
                    <p className="contactInfo"><img className="contactIcon" src={mail} alt="ikona koperty"/> example@example.com</p>
                    <p className="contactInfo"><img className="contactIcon" src={phone} alt="ikona koperty"/> 123-456-789</p>
                    <p className="contactInfo"><img className="contactIcon" src={pin} alt="ikona koperty"/> Aleja Legionów 58, 18-499 Łomża</p>
                </div>
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=aleja%20legion%C3%B3w%2058%20%C5%81om%C5%BCa+(asd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=a998321d556867583c82da19433a19ee4a2fd7db'></script>
            </div>
        </div>
    );
};

export default Home;                          
