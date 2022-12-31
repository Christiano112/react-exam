import { useReducer } from 'react';
import myReducer from './Reducer';

const MyCustomHook = (props) => {
    const [myCount, dispatch] = useReducer(myReducer, 0, () => {
        // retrieve the counter value from local storage using the component's key
        const localCount = localStorage.getItem(`counter-${props.countKey}`);
        return localCount ? parseInt(localCount, 10) : 0;
    });

    const handleMyIncrease = () => {
        dispatch({
            type: "add",
        });

        localStorage.setItem(`counter-${props.countKey}`, JSON.stringify(myCount + 1));
    }

    const handleMyDecrease = () => {
        dispatch({
            type: "minus",
        });

        localStorage.setItem(`counter-${props.countKey}`, JSON.stringify(myCount - 1));
    }

    const handleMySetValue = (e) => {
        dispatch({
            type: "set",
            valued: e,
        });

        if (e.target.value >= 0) {
            // Description: Set the Counter Value and save it to the Local Storage
            localStorage.setItem(`counter-${props.countKey}`, JSON.stringify(Number(e.target.value)));
        } else {
            // Description: Set the Counter Value and save it to the Local Storage
            localStorage.setItem(`counter-${props.countKey}`, JSON.stringify(e.target.value));
        }
    }

    const handleMyReset = () => {
        dispatch({
            type: "reset",
        });

        localStorage.setItem(`counter-${props.countKey}`, JSON.stringify(0));
    }


    return (
        <>
            <div className='custom-main'>
                <button
                    disabled={myCount > 1000}
                    onClick={() => {
                        handleMyIncrease();
                    }}>+</button>
                <h1>{myCount}</h1>
                <button
                    // Description: Disabled the Decrease Button if the Counter Value is less than or equal to 0
                    disabled={myCount <= 0}
                    onClick={() => {
                        handleMyDecrease();
                    }}>-</button>
            </div>
            <div className='custom-set'>
                <button onClick={() => {
                    handleMyReset();
                }}>RESET</button>
                <label>{"Input Number of Observation"}
                    <input type="number"
                        value={myCount}
                        disabled={myCount.length > 3 || myCount >= 998}
                        onChange={(e) => {
                            handleMySetValue(e);
                        }} />
                </label>
            </div>
        </>
    )
}

export default MyCustomHook;