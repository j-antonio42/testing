import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value)

    const handleCount = () => {
        setCounter(counter + 1)
    }

    const resetCount = () => {
        setCounter(value)
    }

    const substractCount = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>  

            <button onClick={ handleCount }>+1</button>
            <button onClick={ resetCount }>Reset</button>
            <button onClick={ substractCount }>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
   value: PropTypes.number
}

export default CounterApp




