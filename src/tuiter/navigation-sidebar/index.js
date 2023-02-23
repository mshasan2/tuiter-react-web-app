import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"/>
                </a>
                <a className={`list-group-item ${active === "home" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-house"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Home</span>
                </a>
                <a className={`list-group-item ${active === "explore" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-hashtag"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Explore</span>
                </a>
                <a className={`list-group-item ${active === "notifications" ? "active" : ""}`}
      href="/">
                    <i className="fa-solid fa-bell"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Notifications</span>
                </a>
                <a className={`list-group-item ${active === "messages" ? "active" : ""}`}
      href="/">
                    <i className="fa-solid fa-envelope"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Messages</span>
                </a>
                <a className={`list-group-item ${active === "bookmarks" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-bookmark"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === "lists" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-list"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Lists</span>
                </a>
                <a className={`list-group-item ${active === "profile" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-user"/>
                    <span className="d-none d-xl-inline d-inline ps-2">Profile</span>
                </a>
                <a className={`list-group-item ${active === "more" ? " active" : ""}`}
      href="/">
                    <i className="fa-solid fa-ellipsis"/>
                    <span className="d-none d-xl-inline d-inline ps-2">More</span></a>
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