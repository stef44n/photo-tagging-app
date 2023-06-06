import React from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ onSelect }) => {
    return (
        <div className="dropdown">
            <ul>
                <li onClick={() => onSelect("Item 1")}>Character 1 - Ash</li>
                <li onClick={() => onSelect("Item 2")}>Character 2 - Tom</li>
                <li onClick={() => onSelect("Item 3")}>Character 3 - JB</li>
            </ul>
        </div>
    );
};

export default Dropdown;
