import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from './../context/theme';

const activeStyle = {
    color: 'rgb(187, 46, 31)'
};

const Nav = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);
    return (
        <nav className="row space-between">
            <ul className="row nav">
                <li>
                    <NavLink
                        to="/"
                        exact
                        activeStyle={activeStyle}
                        className="nav-link"
                    >
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/battle"
                        exact
                        activeStyle={activeStyle}
                        className="nav-link"
                    >
                        Battle
                    </NavLink>
                </li>
            </ul>
            <button
                style={{ fontSize: 30, cursor: 'pointer' }}
                className="btn-clear"
                onClick={toggleTheme}
            >
                {theme === 'light' ? '🔦' : '💡'}
            </button>
        </nav>
    );
};

export default Nav;
