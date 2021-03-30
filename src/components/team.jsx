import Member from "./member"
import { connect } from "react-redux";


function Team({ users }) {
    return (
        <header className="team">
            <div className="team-wrapper-common">
                <div className="team-wrapper">
                    <div className="team-inner-centre">
                        <h2 className="team-inner-title">MEET OUR AMAZING TEAM</h2>
                        <p className="team-inner-text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                    </div>
                    <ul className="team-inner-list">
                        <Member props={"team-inner-list"} users={users} />
                    </ul>
                    <p className="team-inner-text-btn">Become part of our dream team, let’s join us ! </p>
                    <button className="team-button">WE ARE HIRING</button>
                </div>
            </div>
        </header>

    )

}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(Team)