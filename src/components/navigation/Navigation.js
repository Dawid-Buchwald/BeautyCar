import React from 'react';


const Navigation = () => {
    return (
        <>
            <div className="container navigation">
                <a className="logo" href="#">
                    <span className="logoSpanFirst">Beauty</span><span className="logoSpanSecond">Car</span>
                </a>
                <ul>
                    <li className="navLi"><a href="#">Strona główna</a></li>
                    <li className="navLi"><a href="#">O nas</a></li>
                    <li className="navLi"><a href="#">Usługi</a></li>
                    <li className="navLi"><a href="#">Portfolio</a></li>
                    <li className="navLi"><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;