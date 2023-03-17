import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group">
                <Link className={`list-group-item`}  to = "/" >
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to = "/tuiter/home"
                      className={`list-group-item ${active === "home" ? " active" : ""}`} >
                    <i className="fa-solid fa-house"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Home</span>
                </Link>
                <Link to = "/tuiter/explore"
                      className={`list-group-item ${active === "explore" ? " active" : ""}`}>
                    <i className="fa-solid fa-hashtag"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Explore</span>
                </Link>
                <Link to = "/"
                      className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
                    <i className="fa-solid fa-bell"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Notifications</span>
                </Link>
                <Link to = "/"
                      className={`list-group-item ${active === "messages" ? "active" : ""}`}>
                    <i className="fa-solid fa-envelope"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Messages</span>
                </Link>
                <Link to = "/"
                      className={`list-group-item ${active === "bookmarks" ? " active" : ""}`}>
                    <i className="fa-solid fa-bookmark"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Bookmarks</span>
                </Link>
                <Link to = "/"
                      className={`list-group-item ${active === "lists" ? " active" : ""}`}>
                    <i className="fa-solid fa-list"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Lists</span>
                </Link>
                <Link to = "/tuiter/profile"
                      className={`list-group-item ${active === "profile" ? " active" : ""}`}>
                    <i className="fa-solid fa-user"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Profile</span>
                </Link>
                <Link to = "/"
                      className={`list-group-item ${active === "more" ? " active" : ""}`}>
                    <i className="fa-solid fa-ellipsis"/>
                    <span className="d-none d-xl-inline d-inline ps-2">More</span>
                </Link>
                <Link to="/" className="list-group-item">
                    <i className="fa-solid fa-l"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Labs</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="/"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>

    )
};

export default NavigationSidebar;