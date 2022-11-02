import React from 'react'
import { Link } from 'react-router-dom';
import errorImage from "../images/error404.webp"

const ErrorPage = () => {
    return (
        <article style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem", paddingTop: "1rem" }}>
            <h1 style={{ color: "red" }}>404 PAGE</h1>

            <img src={errorImage} alt="error pic" style={{ width: "30rem" }} />

            <Link to="/" style={{ padding: ".5rem 1rem", background: "red", color: "#fff", borderRadius: "1rem" }}>Take Me Home</Link>
        </article>
    )
}

export default ErrorPage;