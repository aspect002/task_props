import React from "react"

export const Collegyes = (props) => {
    return (
        <div>
            {props.collegyes.map((element, index) => {
                return (
                    <div key={index}>{element}</div>
                )
            })}
        </div>
    );
};
