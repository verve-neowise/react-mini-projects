import { useState } from 'react'
import './squares.css'

function Squares() {

    const [number, setNumber] = useState(10)
    
    function plus() {
        setNumber(number + 1)
    }

    function minus() {
        if (number > 0) {
            setNumber(number - 1)
        }
    }

    const arr = []

    for (let i = 0; i < number; i++) {
        arr.push(
            <span className='square'></span>
        )
    }

    return (
        <div className='container'>
            <div className="squares">
                {arr}
            </div>

            <div className="buttons">
                {
                    number == 0 ? <></> : <button onClick={minus}>{'<'}</button>
                } 
                <span> {number} </span>
                <button onClick={plus} >{'>'}</button>
            </div>
        </div>
    )
}

export default Squares