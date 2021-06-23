import {Logo} from './logo'
import {DialogButton,Dialog} from "./components/helpDialog";
import {useEffect, useState} from "preact/hooks";

const numberArray = () => Array(9)
    .fill(0).map((j, i) => ({index: i, order: Math.random()}))
    .sort((a, b) => a.order - b.order).map((a) => a.index + 1)

const reverseArray = (array: number[], index: number) => {
    index = index + 1
    if (array.length === index) return array.slice(0).reverse();
    const firstPart = array.slice(0, index).reverse();
    const secondPart = array.slice(index - array.length)
    return [...firstPart, ...secondPart]
}


export function App() {
    const [numberSet, setNumberSet] = useState(numberArray())
    const [count, setCount] = useState(0)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const clickButtonHandler = (e: Event) => {
        e.preventDefault()
        const target = e.target as HTMLButtonElement
        const index = parseInt(target.value)
        const newSet = reverseArray(numberSet, index)
        setNumberSet(newSet)
        setCount(count + 1)

    }

    const tryAgain=()=>{
        setNumberSet(numberArray())
        setPuzzleSolved(false)
        setCount(0)
    }

    useEffect(() => {
        if (JSON.stringify(numberSet) === "[1,2,3,4,5,6,7,8,9]") setPuzzleSolved(true)
    }, [numberSet])


    return (

        <div class="container">
        <Dialog />
            <Logo/>
            <h1 class="display-1"> Reverse!</h1>
            <div class="display-3" >
                {numberSet.map((n, index) => (
                    <button class="btn btn-lg btn-success ms-2"onClick={clickButtonHandler}
                            value={index}>
                    {n}
                    </button>
                ))}
            </div>

            <div class="display-3">Trial count<i class="bi bi-arrow-right"></i> {count}</div>
            {puzzleSolved && <div class="display-3">
                <span>Solved Puzzle!</span>
                <button onClick={tryAgain} class="btn btn-lg btn-outline-secondary ms-2"><span class="display-3">Play Again?</span></button>
                </div>}
            <p>

                <a
                    class="link"
                    href="https://preactjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Preact
                </a>
            </p>
            <DialogButton />
        </div>
    )
}
