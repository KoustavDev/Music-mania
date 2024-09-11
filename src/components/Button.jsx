import React from "react";
import './buttonStyle.css'

const Button = ({text}) => {
    return (
        <button className="button">
            {text}
        </button>
    );
};

export default Button;
