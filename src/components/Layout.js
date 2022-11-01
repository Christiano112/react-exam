import { NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", paddingTop: "1rem" }}>

            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "red" : "blue",
                };
            }} to="/">HOME</NavLink>

            <NavLink style={({ isActive }) => {
                return {
                    color: isActive ? "red" : "blue",
                };
            }} to="/counter">Counter</NavLink>
        </nav>
    )
}

export default Layout;