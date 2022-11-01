import React from 'react'
import Layout from './Layout';
import { useState } from 'react';
import CustomHook from './Custom';

const myObservations = [
    {
        id: 0,
        observe: "Male",
        amount: 1
    },
    {
        id: 1,
        observe: "Female",
        amount: 2
    }
]

let nextId = 2;

const Home = () => {
    const [observation, setObservation] = useState(myObservations);
    const [text, setText] = useState("");
    const [num, setNum] = useState(0)

    const handleAdd = () => {
        setObservation([
            ...observation,
            {
                id: nextId++,
                observe: text,
                amount: num
            }
        ]);
        setText("")
        setNum(0)
    }

    return (
        <div>
            <Layout />

            <ul>
                {observation.map(data => (
                    <li key={data.id}>
                        {data.observe}{' '}{data.amount}{' '}
                        <button onClick={() => {
                            setObservation(observation.filter(ob => ob.id !== data.id))
                        }}>
                            Delete
                        </button>
                        <CustomHook />
                    </li>
                ))}
            </ul>

            <input
                value={text}
                onChange={e => setText(e.target.value)} />
            <input
                value={num}
                onChange={e => setNum(e.target.value)} />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    )
}

export default Home