import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from '../tuits/tuits-reducer'

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('')
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }
    return(
        <div className="border border-2 border-light pt-3 pb-3 ps-3 pe-2 border-bottom-0">
            <div className="row ">
                <div className="col-sm-2 col-md-1">
                    <img src={`/images/nasa.jpeg`} className="rounded-circle"
                         width="55px" height="55px" alt="Avatar Icon"/>
                </div>
                <div className="col-sm-10 col-md-11 ">
                    <div className="ps-3">
                        <textarea placeholder={"What's happening?"}
                        className={"form-control border-0"}
                        value={whatsHappening}
                        onChange={(event) => setWhatsHappening(event.target.value)}/>
                    </div>
                    <div className="ps-3">
                        <button className="rounded-pill
                         btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                            Tuit
                        </button>
                        <div className="text-primary fs-2">
                            <i className="bi bi-card-image me-3"></i>
                            <i className="bi bi-filetype-gif me-3"></i>
                            <i className="bi bi-bar-chart me-3"></i>
                            <i className="bi bi-emoji-smile me-3"></i>
                            <i className="bi bi-geo-alt"></i>
                        </div>
                    </div>



                </div>

            </div>



        </div>

    )
}

export default WhatsHappening;