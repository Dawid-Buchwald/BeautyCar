import React, {useState} from 'react';


const Contact = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(25);
  
    return (
        <>
            <p>Masz pytania? Chętnie na nie odpowiemy!</p>
            <form>
                <input type="email" value={name} onChange={e => setName(e.target.value)}/>
                <textarea type="number" value={age} onChange={e => setAge(e.target.value)}/>
                <button type="submit">WySlij</button>
            </form>
        </>
      
    );
  };

export default Contact;