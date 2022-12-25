import React from 'react'
import { useState } from 'react';
import MyCustomHook from './Custom';


const myObservations = [
    {
        id: 0,
        observe: "Male"
    },
    {
        id: 1,
        observe: "Female"
    }
]

let nextId = 2;


const Home = () => {
    const [observation, setObservation] = useState(myObservations);
    const [text, setText] = useState("");

    const handleAdd = () => {
        setObservation([
            ...observation,
            {
                id: nextId++,
                observe: text
            }
        ]);
        setText("")
    }

    return (
        <section className='home container'>
            <div className='row'>
                <h1>My LIst of Observations</h1>

                <article className='home-list col'>
                    <ul>
                        {observation.map(data => (
                            <li key={data.id}>
                                <div className="home-list-data">
                                    {data.observe}{' '}
                                </div>

                                <MyCustomHook />

                                <button onClick={() => {
                                    setObservation(observation.filter(ob => ob.id !== data.id))
                                }}
                                    className="delete-btn">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </article>

                <div className="new-home col">
                    <h2>Add New Observations</h2>
                    <input
                        placeholder='Name of Observation'
                        value={text}
                        onChange={e => setText(e.target.value)} />
                    <button onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home;