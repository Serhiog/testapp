import { useState } from "react";
import { connect } from "react-redux";
import { updateUser, resetZoomUser } from "../api-actions"

function Users({ users, name, position, quote, updateUser, resetZoomUser }) {
    return (
        <section className="users">
            <div className="users__inner">
                <div className="users__wrapper">
                    <p className="users__text">{quote}</p>
                    <span className="users__name">{name}</span>
                    <span className="users__job">{position}</span>
                    <ul className="users__list">
                        {users.map(user => {
                            return (
                                <li className="users__list-item" key={user.id}>
                                    <img className="users__list-img" src={user.photo} alt={user.name}
                                        onMouseOver={() => { updateUser(user.id) }} width={user.zoom === true ? "75px" : "45px"} heigth={user.zoom === true ? "75px" : "45px"}
                                        onMouseLeave={() => { resetZoomUser(user.id) }}></img>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>

    )
}

const mapStateToProps = (state) => ({
    id: state.id,
    name: state.name,
    position: state.position,
    quote: state.quote,
    photo: state.photo,
    users: state.users,
    zoom: state.zoom
})

const mapDispatchToProps = (dispatch) => ({
    updateUser(id) {
        dispatch(updateUser(id))
    },
    resetZoomUser(id) {
        dispatch(resetZoomUser(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)