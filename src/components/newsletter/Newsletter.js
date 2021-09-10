import React from 'react';
import { useState } from 'react';
import db from "../../firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";




function Newsletter() {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if(input) {
            console.log(input);
            db.collection("emails").add({
                email: input,
                time: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setInput("");
            setMessage("Dziękujemy, za subskrybcję!")
            setTimeout(()=> {
                setMessage("");
            }, 3000)
        }
    }

    return (
        <div className="newsletter">
            <container className="newsletterContainer">
                <form className="form" onSubmit={submitHandler}>
                    <h2 className="newsletterHeader">Dołącz do naszego Newslletera</h2>
                    <input className="newsletterInput" type="email" onChange={inputHandler} value={input} />
                    <button className="newsletterButton" type="submit">Zapisz</button>
                </form>
                {message && <alert className="newsletterMessage">{message}</alert>}
            </container>
        </div>
    );
};

export default Newsletter;