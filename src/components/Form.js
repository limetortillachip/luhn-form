import { useState, useEffect, useRef } from "react"

export default function Form (props) {
    const [card, setCard] = useState({
        cardNum: "",
        status: 'unvalidated'       //'unvalidated`, `validating`, `validated`
    });

    //const [showOutput, setShowOutput] = useState(false);

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
        setCard({...card, status: 'validated'})
        //setShowOutput(true);

    }

    const handleChange = (e) => {

        setCard({
            [e.target.name]: e.target.value,
            status: 'validating'
        });
    }


    return (
        <form>
            <div className="input">
                <label for="cardNum">Enter Card Number:</label>
                <input 
                    type="text"
                    name="cardNum"
                    onChange={handleChange} 
                    value={card.cardNum}
                    placeholder="1234567890123456"></input>
                <button type="submit" onClick={handleClick}>Submit!</button>
            </div>
            <div className="output">
                {card.status === 'validated' &&
                    }
            </div>
        </form>
    )}