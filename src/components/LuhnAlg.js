import { useRef } from "react";

export default function LuhnAlg ({ workingNum }) {

    let x= "8433182964";
    let ref = useRef({
        numList: [],
        doubleNums: [],
        checkDigit: Number,
        total: 0,
        valid: false
    })

    //  1a. take all numbers except last digit
    let list = ref.current.numList = x.split('');
    ref.current.checkDigit = Number(list.pop());

    //  2. double every other number starting from the right
    ref.current.doubleNums = list.map((num, i) => {
        return i % 2 ? num : num *2;
    })

    //  3. sum all resulting digits
    ref.current.doubleNums.join("").split("").forEach((e) => {
        e = Number(e);
        return ref.current.total += e;
    })

    //  4. add check digit and check if total % 10
    const ifValid = () => {
        let total = ref.current.total + ref.current.checkDigit;

        return total % 10 === 0 ? "valid!" : "invalid!";
    }



    return (<div>
    
        <p>{x}</p>
        <p>{ref.current.numList.join('')}</p>
        <p>{ref.current.doubleNums.join('')}</p>
        <p>{ref.current.total}</p>
        {ref.current.checkDigit}
        <p>{ifValid()}</p>
        
    </div>);
}