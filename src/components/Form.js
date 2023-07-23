import { useState } from "react"

export default function Form (params) {
    const [card, setCard] = useState({
        cardNumber: ""
    });

    const handleChange = (e) => {
        setCard({...card, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(card);
    }

    const verifyCard = () => {
        //get current card number
        let x = card?.cardNumber;
        console.log(x);

        //split string and get each individual num
        x = x.split("").map(x => {return Number(x)});
        console.log(x);


    }

    verifyCard(card);

    return (
        <form onSubmit={handleSubmit}>
            <label name="card-number">Enter card number: </label>
            <input type="text"
            name="cardNumber"
            onChange={handleChange}
            maxLength={16}></input>
            <button type="submit">submit!</button>
        </form>
    )
    
}