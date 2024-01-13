import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <header>
            <h1>Header</h1>
            <button onClick={ toggleTheme }>
            {theme === 'dark' ? '☀️' : '🌒'}
            </button>
        </header>
    );
}

export default Header;