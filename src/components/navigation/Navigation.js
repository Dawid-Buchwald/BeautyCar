import React from 'react';


const Navigation = () => {
    return (
        <>
            <div className="container navigation">
                <a href="#">
                    <span>Beauty</span><span>Car</span>
                </a>
                <ul className="navUl">
                    <li><a href="#">Strona główna</a></li>
                    <li>O nas</li>
                    <li>Usługi</li>
                    <li>Portfolio</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;