import React from 'react';


const ServiceOffer = () => {
    return (
        <>
           <div className="offer">
           <h2 className="offerHeader" id="offer">Wybierz jeden z naszych pakietów!</h2>
            <section className="container service">
                <p className="gold">GOLD</p>
                <ul className="offerList">
                    <li>zabezpieczenie lakieru powłoką kwarcową i ceramiczną</li>
                    <li>zabezpieczenie szyb powłoką ceramiczną</li>
                    <li>czyszczenie i zabezpieczenie wnętrza samochodu</li>
                    <li>renowacja oraz zabezpieczanie felg samochodowych powłoką ceramiczną</li>
                    <li>czyszczenie i impregnacja tapicerki skórzanej i materiałowej  powłoką ceramiczną</li>
                    <li>kompleksowe przygotowanie samochodów do sprzedaży</li>
                </ul>
            </section>                
            <section className="container service">
                <p className="gold">SILVER</p>
                <ul className="offerList">
                    <li>czyszczenie karoserii z lotnej rdzy, usuwanie smoły, owadów, korekta płytkich rys na lakierze</li>
                    <li>zabezpieczenie szyb powłoką ceramiczną</li>
                    <li>czyszczenie i zabezpieczenie wnętrza samochodu</li>
                    <li>renowacja oraz zabezpieczanie felg samochodowych powłoką ceramiczną</li>
                </ul>
            </section>
            <section className="container service">
                <p className="gold">BROWN</p>
                <ul className="offerList">
                    <li>czyszczenie karoserii z lotnej rdzy, usuwanie smoły, owadów</li>
                    <li>zabezpieczenie szyb powłoką ceramiczną</li>
                    <li>czyszczenie i zabezpieczenie wnętrza samochodu</li>
                </ul>
            </section>
           </div>
        </>
    
    );
};

export default ServiceOffer;