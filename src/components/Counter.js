import { useReducer } from "react";
import { useState } from "react";
import myReducer from "./Reducer";
import altSchool from "../images/AItSchool-Image-1024x671.webp";
import setemi from "../images/setemi.jpeg"



const Counter = () => {
    const [myCount, dispatch] = useReducer(myReducer, 0);
    const [option, setOption] = useState(false)
    const [show, setShow] = useState(false)

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

            <aside className="counter">
                <div className="counter-main">
                    <button
                        onClick={() => handleMyIncrease()}
                        style={{ fontSize: "1.3rem", borderRadius: "50%", fontWeight: "700", height: "2.5rem", width: "2.5rem", padding: "0" }}>+</button>
                    <div className="show-counter"><p>{myCount}</p></div>
                    <button
                        onClick={() => handleMyDecrease()}
                        style={{ fontSize: "1.5rem", borderRadius: "50%", fontWeight: "900", height: "2.5rem", width: "2.5rem", padding: "0" }}>-</button>
                </div>

                <div className="counter-set">
                    <button
                        onClick={() => handleMyReset()}>RESET</button>
                    <label>{'Input a Number to Set Counter'}
                        <input type="number"
                            value={myCount}
                            onChange={(e) => handleMySetValue(e)} />
                    </label>
                </div>
            </aside>

            <section className="counter-display">
                <h2>Would you like to see the demonstration of the Counter on CSS Border Radius or CSS Image Width</h2>
                <p style={{ fontSize: "10px", color: "red" }}>Use the Counters Up for Controls</p>

                <div className="counter-display-btns">
                    <button onClick={() => { setOption(true); setShow(true) }}>CSS Border Radius</button>
                    <button onClick={() => { setOption(false); setShow(true) }}>CSS Image Width</button>
                </div>

                <div>
                    {show && (
                        <>
                            {option ? (
                                <>
                                    <img src={setemi} alt="setemi" style={{ width: "20rem", borderRadius: myCount + "rem" }} />
                                </>
                            ) : (
                                <>
                                    <img src={altSchool} alt="altschool" style={myCount <= 5 ? { width: "5rem" } : { width: myCount + "rem" }} />
                                </>
                            )}
                        </>
                    )}
                </div>
            </section>
        </article>
    )
}

export default Counter;