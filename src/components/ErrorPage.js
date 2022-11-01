import React from 'react'
import errorImage from "../images/error404.webp"

const ErrorPage = () => {
    return (
        <div>
            <h1>404 PAGE</h1>

            <img src={errorImage} alt="error pic" />
        </div>
    )
}

export default ErrorPage;