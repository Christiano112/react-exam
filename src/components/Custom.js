import { useReducer } from 'react';
import myReducer from './Reducer';

const MyCustomHook = () => {
    const [myCount, dispatch] = useReducer(myReducer, 0);

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

    const storeCountIncrease = () => {
        localStorage.setItem("myCount", JSON.stringify(myCount + 1));
    }

    const storeCountDecrease = () => {
        localStorage.setItem("myCount", JSON.stringify(myCount - 1));
    }

    const storeCount = (e) => {
        localStorage.setItem("myCount", JSON.stringify(myCount));
        if (e.target.value >= 0) {
            // Description: Set the Counter Value and save it to the Local Storage
            localStorage.setItem("myCount", JSON.stringify(Number(e.target.value)));
        } else {
            // Description: Set the Counter Value and save it to the Local Storage
            localStorage.setItem("myCount", JSON.stringify(e.target.value));
        }
    }



    return (
        <>
            <div className='custom-main'>
                <button
                    disabled={myCount > 1000}
                    onClick={() => { handleMyIncrease();
                    storeCountIncrease()}}>+</button>
                <h1>{myCount}</h1>
                <button
                    // Description: Disabled the Decrease Button if the Counter Value is less than or equal to 0
                    disabled={myCount <= 0}
                    onClick={() => { handleMyDecrease();
                    storeCountDecrease()}}>-</button>
            </div>
            <div className='custom-set'>
                <button onClick={() => handleMyReset()}>RESET</button>
                <label>{"Input Number of Observation"}
                    <input type="number"
                        value={myCount}
                        disabled={myCount.length > 3 || myCount >= 998}
                        onChange={(e) => {handleMySetValue(e);
                        storeCount(e)}} />
                </label>
            </div>
        </>
    )
}

export default MyCustomHook;