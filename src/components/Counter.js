import { useReducer } from "react";
import { useState } from "react";
import myReducer from "./Reducer";
import altSchool from "../images/AItSchool-Image-1024x671.webp";
import setemi from "../images/setemi.jpeg"
import Layout from './Layout';



const Counter = () => {
    // const [count, setCount] = useState(0);
    const [myCount, dispatch] = useReducer(myReducer, 0);
    const [option, setOption] = useState(false)

    //USE STATE FUNCTIONS
    // const handleDecrease = () => {
    //     setCount((count) => count - 1)
    // }

    // const handleIncrease = () => {
    //     setCount((count) => count + 1)
    // }

    // const handleReset = () => {
    //     setCount(0)
    // }

    // const handleSetValue = (e) => {
    //     setCount(e.target.value)
    // }

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
            <Layout />

            {/* USE STATE FOR COUNTER */}
            {/* <section>
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
            </section> */}

            {/* USE REDUCER FOR COUNTER */}
            <h1>{myCount}</h1>
            <section className="counter">
                <button
                    onClick={() => handleMyIncrease()}>INCREMENT</button>
                <button
                    onClick={() => handleMyReset()}>RESET</button>
                <button
                    onClick={() => handleMyDecrease()}>DECREMENT</button>

                <label>{'Input a Number to Set Counter'}
                    <input type="number"
                        value={myCount}
                        onChange={(e) => handleMySetValue(e)} />
                </label>
            </section>

            <section className="counter-display">
                <h2>Would you like to see the demonstration of the Counter on CSS Border Radius or CSS Image Width</h2>

                <div className="counter-display-btns">
                    <button onClick={() => setOption(true)}>CSS Border Radius</button>
                    <button onClick={() => setOption(false)}>CSS Font Size / Image Width</button>
                </div>

                {option ? (
                    <>
                        <img src={setemi} alt="setemi" style={{ width: "20rem", borderRadius: myCount + "rem" }} />
                    </>
                ) : (
                    <>
                        {myCount <= 10 ? (
                            <p style={myCount <= 5 ? { fontSize: "10px", color: "red" } : { fontSize: myCount + "px", color: "red" }}>Lets Become World Class Together</p>
                        ) : (
                            <img src={altSchool} alt="altschool" style={{ width: myCount + "rem" }} />
                        )}
                    </>
                )}
            </section>
        </article>
    )
}

export default Counter;