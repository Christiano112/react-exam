// Description: These hooks are imported from React
import { useState, useEffect } from "react";
// Description: This Pic is used for the CSS Image Width Demonstration
import altSchool from "../images/AItSchool-Image-1024x671.webp";
// Description: This Pic is used for the CSS Border Radius Demonstration
import setemi from "../images/setemi.jpeg"


// Description: This is the Counter Component
const Counter = () => {
    // Description: This is the useState Hook for saving and setting the Counter Value
    const [myCount, setCount] = useState(0);
    // Description: This is the useState Hook for saving and setting the Option Value
    const [option, setOption] = useState(false);
    // Description: This is the useState Hook for saving and setting the Show Value
    const [show, setShow] = useState(false);

    // Description: This is the useEffect Hook for getting the Counter Value from the Local Storage
    useEffect(() => {
        const myCounter = JSON.parse(localStorage.getItem("myCounter"));
        // Description: This is the if statement to check if the Counter Value is not valid
        if (myCounter) {
            setCount(myCounter);
        }
    }, [])

    // Description: This is the function for increasing the Counter Value
    const handleMyIncrease = () => {
        // Description: Set the Counter Value and save it to the Local Storage
        setCount(myCount + 1)
        localStorage.setItem("myCounter", JSON.stringify(myCount + 1));
    }

    // Description: This is the function for decreasing the Counter Value
    const handleMyDecrease = () => {
        // Description: Set the Counter Value and save it to the Local Storage
        setCount(myCount - 1)
        localStorage.setItem("myCounter", JSON.stringify(myCount - 1));
    }

    // Description: This is the function for setting the Counter Value
    const handleMySetValue = (e) => {
        if (e.target.value >= 0) {
            // Description: Set the Counter Value and save it to the Local Storage
            setCount(Number(e.target.value));
            localStorage.setItem("myCounter", JSON.stringify(Number(e.target.value)));
        } else {
            // Description: Set the Counter Value and save it to the Local Storage
            setCount(e.target.value);
            localStorage.setItem("myCounter", JSON.stringify(e.target.value));
        }
    }

    // Description: This is the function for resetting the Counter Value
    const handleMyReset = () => {
        // Description: Reset the Counter Value and save it to the Local Storage
        setCount(0);
        localStorage.setItem("myCounter", JSON.stringify(0));
    }


    return (
        <article style={{ width: "75%", margin: "3rem auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem" }}
            className="container">
            <aside className="counter">
                <div className="counter-main">
                    <button
                        // Description: Disabled the Decrease Button if the Counter Value is greater than 100
                        disabled={myCount > 100}
                        onClick={() => handleMyIncrease()}
                        style={{ fontSize: "1.3rem", borderRadius: "50%", fontWeight: "700", height: "2.5rem", width: "2.5rem", padding: "0" }}>+</button>
                    <div className="show-counter"><p>{myCount}</p></div>
                    <button
                        // Description: Disabled the Decrease Button if the Counter Value is less than or equal to 0
                        disabled={myCount <= 0}
                        onClick={() => handleMyDecrease()}
                        style={{ fontSize: "1.5rem", borderRadius: "50%", fontWeight: "900", height: "2.5rem", width: "2.5rem", padding: "0" }}>-</button>
                </div>

                <div className="counter-set">
                    <button
                        // Description: Reset the Counter Value to 0
                        onClick={() => handleMyReset()}>RESET</button>
                    <label>{'Input a Number to Set Counter'}
                        <input type="number"
                            value={myCount}
                            // Description: Disabled the input field if the Counter Value is greater than 99
                            disabled={myCount.length > 3 || myCount > 99}
                            onChange={(e) => handleMySetValue(e)} />
                    </label>
                </div>
            </aside>

            <section className="counter-display">
                <h2>Would you like to see the demonstration of the Counter on CSS Border Radius or CSS Image Width</h2>
                <p style={{ fontSize: "10px", color: "red" }}>Use the Counters Up for Controls (numbers valid up till 100)</p>

                <div className="counter-display-btns">
                    <button onClick={() => { setOption(true); setShow(true) }}>CSS Border Radius</button>
                    <button onClick={() => { setOption(false); setShow(true) }}>CSS Image Width</button>
                </div>

                <div>
                    {/* IF SHOW IS TRUE THEN DISPLAY THIS SECTION */}
                    {show && (
                        <>
                            {/* USING CONDITIONALS TO TOGGLE THE IMAGE TO DISPLAY */}
                            {option ? (
                                <>
                                    <img src={setemi} alt="setemi" style={{ width: "20rem", borderRadius: myCount + "rem" }} className="img-fluid" />
                                </>
                            ) : (
                                <>
                                    <img src={altSchool} alt="altschool" style={myCount <= 5 ? { width: "5rem" } : { width: myCount + "rem" }} className="img-fluid" />
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