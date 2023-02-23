import React from "react";
const WhoToFollowListItem = (
    {
    who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpeg'}
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-lg-2 col-xl-2 ">
                    <img className="rounded-circle" height={48} width={48}
                         src={`/images/${who.avatarIcon}`} alt={"Profile Pic"}/>
                </div>
                <div className="col-lg-7 col-xl-7 pe-0">
                    <div>
                        <b>{who.userName}</b>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-3 col-xl-3 ps-0">
                    <div>
                        <button type="button" className="btn btn-primary rounded-pill float-end">Follow
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;