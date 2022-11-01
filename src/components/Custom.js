import { useReducer } from 'react';
import myReducer from './Reducer';

const CustomHook = (egCount) => {
    const [myCount, dispatch] = useReducer(myReducer, 0);
    egCount = myCount

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
        <div>
            <section>
                <h1>{myCount}</h1>

                <button onClick={() => handleMyIncrease()}>INCREMENT</button>
                <button onClick={() => handleMyReset()}>RESET</button>
                <button onClick={() => handleMyDecrease()}> DECREMENT</button >

                <input type="number"
                step="0.1"
                value={myCount}
                onChange={(e) => handleMySetValue(e)} />
            </section>
        </div>
    )
}

export default CustomHook;