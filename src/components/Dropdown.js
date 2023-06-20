import React from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ onSelect }) => {
    return (
        <div className="dropdown">
            <ul>
                <li onClick={() => onSelect("Ash")}>Ash</li>
                <li onClick={() => onSelect("Tom")}>Tom</li>
                <li onClick={() => onSelect("Johnny Bravo")}>Johnny Bravo</li>
            </ul>
        </div>
    );
};

export default Dropdown;
