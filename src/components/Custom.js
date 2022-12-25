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

    return (
        <>
            <div className='custom-main'>
                <button
                    disabled={myCount.length > 4 || myCount > 100}
                    onClick={() => handleMyIncrease()}>+</button>
                <h1>{myCount}</h1>
                <button
                    disabled={myCount.length > 4 || myCount > 100}
                    onClick={() => handleMyDecrease()}>-</button >
            </div>
            <div className='custom-set'>
                <button onClick={() => handleMyReset()}>RESET</button>
                <label>{"Input Number of Observation"}
                    <input type="number"
                        value={myCount}
                        disabled={myCount.length > 3 || myCount > 99}
                        onChange={(e) => handleMySetValue(e)} />
                </label>
            </div>
        </>
    )
}

export default MyCustomHook;