import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss"

export function Navigation() {
    return (
        <div className="navigation">
            <Link to="/">Inicio</Link>
            <Link to="/characters">Personajes</Link>
            <Link to="/houses">Casas</Link>
            <Link to="/chronology">Cronología</Link>
        </div>
    );
}
