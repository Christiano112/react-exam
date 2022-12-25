import { ErrorBoundary } from "react-error-boundary";
import Counter from "./Counter";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import ErrorPage from './ErrorPage';
import Layout from "./Layout";


function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{ width: "80%", margin: "3rem auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}
        className="container">
            <h1>Something went wrong:</h1>
            <h2 style={{ color: "red" }} className="fs-4">{error.message}</h2>
            <button onClick={resetErrorBoundary}
                style={{ background: "#27ae60", color: "#fff", padding: ".5rem 1rem", border: "none" }}>Take Me Home</button>
        </div>
    )
}


const MyErrorBoundary = () => {
    let navigate = useNavigate();

    return (
        <>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => { navigate("/") }}
            >
                <Layout />

                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/counter" index element={<Counter />} />
                    <Route path="*" index element={<ErrorPage />} />
                </Routes>
            </ErrorBoundary>
        </>
    )
}

export default MyErrorBoundary;