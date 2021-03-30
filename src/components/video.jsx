import { connect } from "react-redux"
import { ActionCreator } from "../store/action"

function Video({ handlePlayBtn }) {

    return (
        <section className="video">
            <div className="video__inner">
                <div className="video__wrapper">
                    <div className="video__inner-btn">
                        <button className="video__btn" onClick={handlePlayBtn} />
                        <h3 className="video__title">watch our story</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

const mapDispatchToProps = (dispatch) => ({
    handlePlayBtn() {
        dispatch(ActionCreator.handlePlayBtn())
    }

})

export default connect(null, mapDispatchToProps)(Video)