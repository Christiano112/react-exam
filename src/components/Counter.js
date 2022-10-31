import { useState, useReducer } from "react";
import React from 'react';
import myReducer from "./Reducer";
import { NavLink } from 'react-router-dom';
import altSchool from "../images/AItSchool-Image-1024x671.webp";
import setemi from "../images/setemi.jpeg"



const Counter = () => {
    const [count, setCount] = useState(0);
    const [myCount, dispatch] = useReducer(myReducer, 0)

    //USE STATE FUNCTIONS
    const handleDecrease = () => {
        setCount((count) => count - 1)
    }

    const handleIncrease = () => {
        setCount((count) => count + 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleSetValue = (e) => {
        setCount(e.target.value)
    }

    // USE REDUCER FUNCTIONS
    const handleMyDecrease = () => {
        dispatch({
            type: "minus"
        })
    }

    const handleMyIncrease = () => {
        dispatch({
            type: "add"
        })
    }

    const handleMySetValue = (e) => {
        dispatch({
            type: "set",
            valued: e
        })
    }

    const handleMyReset = () => {
        dispatch({
            type: "reset"
        })
    }


    return (
        <article style={{ width: "40rem", margin: "3rem auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem" }}>
            <section>
                <h1>{count}</h1>

                <button
                    onClick={() => handleIncrease()}>INCREMENT</button>
                <button
                    onClick={() => handleReset()}>RESET</button>
                <button
                    onClick={() => handleDecrease()}>DECREMENT</button>

                <input type="number"
                    step="0.1"
                    value={count}
                    onChange={(e) => handleSetValue(e)} />
            </section>

            <section>
                <h1>{myCount}</h1>

                <button
                    onClick={() => handleMyIncrease()}>INCREMENT</button>
                <button
                    onClick={() => handleMyReset()}>RESET</button>
                <button
                    onClick={() => handleMyDecrease()}>DECREMENT</button>

                <input type="number"
                    step="0.1"
                    value={myCount}
                    onChange={(e) => handleMySetValue(e)} />
            </section>

            <section>
                <img src={setemi} alt="setemi" style={{opacity: count}} />
                <img src={altSchool} alt="altschool" style={{ opacity: myCount }} />
            </section>

            <NavLink to="/">Take me Home</NavLink>
            <NavLink to="/counter">Take me to counter page</NavLink>
        </article>
    )
}

export default Counter