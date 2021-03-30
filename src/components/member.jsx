import React from "react"

function Member({ props, users }) {
    return (users.slice(0, 4).map((user, id) => {
        return (
            <li className={props + "item"} key={id}>
                <div className={props + "-photo"}></div>
                <div className={props + "-buttom"}>
                    <span className={props + "-name"}>{user.name}</span>
                    <span className={props + "-job"}>{user.position}</span>
                </div>
            </li>
        )
    }))
}

export default Member