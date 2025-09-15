export default function Header() {
    return ( 
        <header>
            <div>
                <h1>Luhn Algorithm Validator</h1>
                <p> a checksum formula for numbers/digits used with credit card or administrative numbers.</p>
                <ul>
                    <ol>
                        take all numbers except last digit
                    </ol>
                    <ol>
                        double every other digit starting from the right
                    </ol>
                    <ol>
                        sum all resulting digits
                    </ol>
                    <ol>add check digit to the sum. if sum is not divisible by 10, then the card number is invalid.</ol>
                </ul>
            </div>
        </header> 
     );
}
