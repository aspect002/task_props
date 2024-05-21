import React from "react"

export const StasObj = (props) => {
    return (
        <div>
            <div>{props.stasyan.id}</div>
            <div>{props.stasyan.name}</div>
            <div>{props.stasyan.age}</div>
            <div>{props.stasyan.profession}</div>
        </div>
    )
}
