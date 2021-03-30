import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import closeBtn from "../img/close.png";
import { ActionCreator } from '../store/action';
import React, { useEffect } from "react"

function Popup({ showPopup, closePopupBtn }) {

    const handleKeyDown = (evt) => {
        evt.keyCode === 27 ? closePopupBtn() : null
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return !showPopup ? null :
        (
            <div className="popup" >
                <div className="popup__inner">
                    <div className="popup__content">
                        <a className="popup__close" href="#" onClick={closePopupBtn}><img src={closeBtn} width="35px" height="35px"></img></a>
                        <ReactPlayer controls={true} url="https://youtu.be/KvUgaHTNit4" width={"auto"}
                            height={"auto"}
                        />
                    </div>
                </div>
            </div>

        )
}

const mapStateToProps = (state) => ({
    showPopup: state.showPopup
})

const mapDispatchToProps = (dispatch) => ({
    closePopupBtn() {
        dispatch(ActionCreator.closePopupBtn())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup)