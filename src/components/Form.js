import { useState, useEffect, useRef } from "react"

export default function Form (props) {
    const [card, setCard] = useState({
        cardNum: ""
    });

    const [showOutput, setShowOutput] = useState(false);

    let validRef = useRef(false);

    useEffect(()=>{
        let total = validCard(card.cardNum);

        if (total % 10 === 0) {
            validRef.current = true;
        } else {
            validRef.current = false;
        }
    }, [card]);

    const validCard = (x) => {
        //split card number string
        let cardNums = x.split(""), sum = 0;
        //console.log(cardNums);

        //and make each character a number
        //take each index from numbers 
        //if it is second to last number
        // or any other number before it
        // double it and add back to array if indeces match
        cardNums = cardNums.reverse().map((num, i) => {
            num = Number(num);
            if ( i %2 === 0) {
                return num
            } else {
                return (num *2)
            }
        }).reverse();   //reverse back to og array order

        cardNums.join("").split("").forEach(num => {
            sum += Number(num);
        })

        //console.log(cardNums, sum);

       return sum;
    }

    const handleClick = (e) => {
        e.preventDefault();
        setShowOutput(true);

    }

    const handleChange = (e) => {
        setShowOutput(false); // reset output results

        setCard({
            ...card,
            [e.target.name]: e.target.value
        });
    }


    return (
        <form>
            <div className="input">
                <label>Enter Card Number: 
                    <input 
                    type="text"
                    name="cardNum"
                    onChange={handleChange} 
                    value={card.cardNum}
                    placeholder="1234567890123456"></input>
                </label>
                <button type="submit" onClick={handleClick}>Submit!</button>
            </div>
            <div className="output">
                {showOutput &&
                    <label><h2>Result</h2>
                        <output name="result">
                            Card #{card.cardNum} is {validRef.current ? "valid" : "not valid"}.
                        </output>
                    </label>}
            </div>
        </form>
    )}