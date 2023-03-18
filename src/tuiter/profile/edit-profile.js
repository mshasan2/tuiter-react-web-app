import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";
import './index.css'
import InputComponent from "./input-component";
import DateConversion from "./dateConversion"
import {updateDateOfBirth, updateProfileHandler} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";

const EditProfileComponent = () => {
    const profInfo = useSelector(state => state.profile);
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    let fullName = profInfo[0].firstName + " " + profInfo[0].lastName
    let [name, setName] = useState(fullName)
    let [bio, setBio] = useState(profInfo[0].bio)
    let [location, setLocation] = useState(profInfo[0].location)
    let [website, setWebsite] = useState(profInfo[0].website)
    let [edit, setEdit] = useState(false)
    let [dateOfBirth, setdateOfBirth] = useState(profInfo[0].dateOfBirth)

    const dispatch = useDispatch();
    const updateDOBHandler = () => {
        setEdit(false)
        dispatch(updateDateOfBirth(dateOfBirth))
    }

    const updateDOBState = (event) => {
        let updatedDate = event.target.value
        let splitDate = updatedDate.split("-");
        setdateOfBirth(splitDate[2] + "/" + splitDate[1] + "/" +splitDate[0])
    }

    const convertDateValue = (date) => {
        let splitDate = date.split("/");
        let convDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0]
        return convDate
    }

    const updateProfile = () => {
        let split_name = name.split(" ");
        dispatch(updateProfileHandler({
            "firstName": split_name[0],
            "lastName": split_name[1],
            "bio": bio,
            "location": location,
            "website": website
        }));
        routeChange('../profile');

    }


    return(
        <div>
            <div>
                <div className="row">
                    <div className="col-1 mt-2 mb-2 ps-4">
                        <i className="bi bi-x h5"
                           onClick={() => routeChange('../profile')}/>
                    </div>
                    <div className="col-11">
                        <div className="h5 mt-2 mb-2 pe-3">
                            Edit Profile

                            <button
                                className="btn btn-dark
                                 rounded-pill float-end"
                                onClick={updateProfile}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "position-relative mt-2">
                <img src="/images/polyglot.jpeg" alt={"banner"}
                     className="w-100 "/>
                <img src="/images/jose.jpeg" alt={"profile"}
                     className={"rounded-circle position-absolute wd-profile-overlap"}
                     width="120px"/>
            </div>

            <br/>


            <div className="mt-5 border ms-2 me-2 rounded-3">
                {InputComponent("Name", name, setName)}
            </div>

            <div className="mt-4 border ms-2 me-2 rounded-3">
                <div className="ps-3 mt-2 text-muted">
                    <label htmlFor="bio">
                        Bio
                    </label>
                </div>
                <div className="ps-3 pe-2">
                    <textarea id="bio"
                              className="border-0 h5 w-100 wd-resize-none" value={bio}
                           onChange={(event) => setBio(event.target.value)}
                    />
                </div>
            </div>

            <div className="mt-4 border ms-2 me-2 rounded-3">
                {InputComponent("Location", location, setLocation)}
            </div>

            <div className="mt-4 border ms-2 me-2 rounded-3">
                {InputComponent("Website", website, setWebsite)}
            </div>

            <div className="mt-4 ms-2 me-2 rounded-3 ps-3 ">

                {!edit &&
                    <div>
                        <div className="text-muted">
                            Birth date

                             <span>
                                 <i className="bi bi-dot"/>
                                 <span className = "text-primary"
                                 onClick={() => setEdit(true)}>
                                     Edit
                                 </span>
                             </span>
                        </div>
                        <div>
                            <h5>{DateConversion(dateOfBirth)}</h5>
                        </div>

                    </div>
                }

                {edit &&
                 <div>
                     <div className="text-muted">
                         Birth date

                         <span>
                                 <i className="bi bi-dot"/>
                                 <span className = "text-primary"
                                       onClick={updateDOBHandler}>
                                     Done
                                 </span>
                             </span>
                     </div>
                     <div>
                         <input type = "date"
                                value={convertDateValue(dateOfBirth)}
                                onChange={updateDOBState}
                         />

                     </div>

                 </div>
                }





            </div>



        </div>

    );
};
export default EditProfileComponent;

