import React from 'react'
import { useState, useEffect } from 'react';
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

    useEffect(() => {
        const aobservation = JSON.parse(localStorage.getItem("data"));

        if (aobservation) {
            setObservation([...aobservation]);
        }
        console.log(aobservation);

    }, []);

    const handleAdd = () => {
        setObservation([
            ...observation,
            {
                id: nextId++,
                observe: text
            }
        ]);
        setText("");

        localStorage.setItem("data", JSON.stringify([
            ...observation,
            {
                id: nextId++,
                observe: text
            }
        ]));
    }

    const handleDelete = () => {
        localStorage.removeItem("data");
        // localStorage.clear()
    }

    return (
        <section className='home container'>
            <h1 className='fs-3'>My LIst of Observations</h1>

            <article className='home-list'>
                <ul>
                    {observation.map(data => (
                        <li key={data.id}>
                            <div className="home-list-data fs-4">
                                {data.observe}{' '}
                            </div>

                            <MyCustomHook />

                            <button onClick={() => {
                                setObservation(observation.filter(ob => ob.id !== data.id));
                                handleDelete()
                            }}
                                className="delete-btn">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </article>

            <div className="new-home">
                <h2 className='fs-5'>Add New Observations</h2>
                <input
                    placeholder='Name of Observation'
                    value={text}
                    onChange={e => setText(e.target.value)} />
                <button onClick={handleAdd}>
                    Add
                </button>
            </div>
        </section>
    )
}

export default Home;