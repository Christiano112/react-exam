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


const Home = () => {
    const [observation, setObservation] = useState(myObservations);
    const [text, setText] = useState("");
    const [nextId, setNextId] = useState(2);


    useEffect(() => {
        const myObservation = JSON.parse(localStorage.getItem("data"));

        if (myObservation) {
            setObservation([...myObservation]);
        }

        console.log(myObservation);

    }, []);

    useEffect(() => {
        const myId = JSON.parse(localStorage.getItem("nextId"));

        if (myId) {
            setNextId(myId);
        }

    }, [])


    const handleAdd = () => {
        setObservation([
            ...observation,
            {
                id: nextId,
                observe: text
            }
        ]);

        setText("");

        localStorage.setItem("data", JSON.stringify([
            ...observation,
            {
                id: nextId,
                observe: text
            }
        ]));

        setNextId(nextId + 1);
        localStorage.setItem("nextId", JSON.stringify(nextId + 1));
    }


    return (
        <section className='home container'>
            <h1 className='fs-3'>My LIst of Observations</h1>

            <article className='home-list'>
                <ul>
                    {observation.map(data => (
                        <li key={Number(data.id)}>
                            <div className="home-list-data fs-4">
                                {data.observe}{' '}
                            </div>

                            <MyCustomHook countKey={Number(data.id)} />

                            <button onClick={() => {
                                setObservation(observation.filter(ob => ob.id !== data.id));
                                localStorage.setItem("data", JSON.stringify(observation.filter(ob => ob.id !== data.id)));
                                localStorage.removeItem(`counter-${Number(data.id)}`);
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