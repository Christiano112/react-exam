import { ErrorBoundary } from "react-error-boundary";
import Counter from "./Counter";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import ErrorPage from './ErrorPage';


function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{ width: "40rem", margin: "3rem auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem" }}>
            <h1>Something went wrong:</h1>
            <h2 style={{ color: "red" }}>{error.message}</h2>
            <button onClick={resetErrorBoundary}
                style={{ background: "#27ae60", color: "#fff", padding: ".5rem 1rem" }}>Take Me Home</button>
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