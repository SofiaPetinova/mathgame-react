import './App.css';
import {useState} from "react";

const operandVariants = ['+', '-', '*']

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomOperand = () => operandVariants[random(0, 2)]

const getRandomNumber = () => (random(0, 15))

const calculate = (n1, n2, operand) => {
    if (operand === '+') return n1 + n2;
    if (operand === '-') return n1 - n2;
    if (operand === '*') return n1 * n2;

}


function App() {
    const n1Initial = getRandomNumber()
    const n2Initial = getRandomNumber()
    const operandInitial = getRandomOperand()

    const [n1, setN1] = useState(n1Initial)
    const [n2, setN2] = useState(n2Initial)
    const [operand, setOperand] = useState(operandInitial)
    const [answer, setAnswer] = useState()

    const [result, setResult] = useState(calculate(n1Initial, n2Initial, operandInitial))
    const [resolution, setResolution] = useState('')

    const shake = () => {
        const n1 = getRandomNumber(), n2 = getRandomNumber(), operand = getRandomOperand()
        setN1(n1)
        setN2(n2)
        setOperand(operand)
        setResult(calculate(n1, n2, operand))
    }
    const check = () => {
        if(answer === result){
            setResolution('Correct')
        } else {
            setResolution('Incorrect')
        }
        shake()
        setAnswer('')
    }


    return (
        <div className="App">
            {n1} {operand} {n2} = <input type="number" value={answer} onChange={(e) => setAnswer(+e.target.value)}/>
            <button onClick={check}>Check</button>
            <hr/>
            <button onClick={shake}>Shake</button>
            {resolution}
            <hr/>
            {result}
        </div>
    );
}

export default App;
