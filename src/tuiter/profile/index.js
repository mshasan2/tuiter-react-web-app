import React from "react";
import './index.css';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";


const dateConversion = (date) => {
    let split_date = date.split("/");
    if ((split_date.length) === 2) {
        const date = new Date(split_date[1], split_date[0] - 1, 1);
        const month = date.toLocaleString('default', { month: 'long' });
        return month + " " + split_date[1];
    } else {
        const date = new Date(split_date[2], split_date[1] -1, split_date[0]);
        const month = date.toLocaleString('default', { month: 'long' });
        return split_date[0] + " " + month + " " + split_date[2];
    }
}

const ProfileComponent = () => {
    const profInfo = useSelector(state => state.profile);
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    return(
        <div>

            <div>
                <div className="row">
                    <div className="col-1 mt-2 mb-2 ps-4">
                        <i className="bi bi-arrow-left h5"
                           onClick={() => routeChange('../')}/>
                    </div>
                    <div className="col-11">
                        <div className="h5 mb-0">
                            {profInfo[0].firstName + " " + profInfo[0].lastName}
                        </div>
                        <div className="mt-0 mb-1 text-muted">
                            {profInfo[0].tweetCount} Tweets
                        </div>
                    </div>
                </div>

            </div>
            <div className = "position-relative ">
                <img src="/images/polyglot.jpeg" alt={"banner"}
                     className="w-100 "/>
                <img src="/images/jose.jpeg" alt={"profile"}
                     className={"rounded-circle position-absolute wd-profile-overlap"}
                     width="120px"/>
            <button
                className="btn border border-3 border-light
                 rounded-pill float-end mt-2 me-2 fw-bold"
                onClick={() => routeChange('../edit-profile')}>
                Edit Profile
            </button>
            </div>
            <div>
                <br/>
                <div className="h3 mb-0 mt-5">{profInfo[0].firstName + " " + profInfo[0].lastName}</div>
                <div className="text-muted">{profInfo[0].handle}</div>

                <div className="mt-3">{profInfo[0].bio}</div>
            </div>
            <div className="text-muted mt-2">
                <span><i className="bi bi-geo-alt h5"/></span>
                <span className="ps-1">{profInfo[0].location}</span>

                <span className="ps-3"><i className="bi bi-balloon h5"/></span>
                <span className="ps-1">Born on {dateConversion(profInfo[0].dateOfBirth)}</span>

                <span className="ps-3"><i className="bi bi-calendar3 h5"/></span>
                <span className="ps-1">Joined {dateConversion(profInfo[0].dateJoined)}</span>
            </div>
            <div className="mt-3">
                <span className="fw-bold">{profInfo[0].followingCount}</span>
                <span className="ps-2 text-muted">Following</span>
                <span className="fw-bold ps-4">{profInfo[0].followersCount}</span>
                <span className="ps-2 text-muted">Followers</span>
            </div>

        </div>

    );
};
export default ProfileComponent;

