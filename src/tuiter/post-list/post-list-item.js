import React from "react";
import './index.css'
import SubPost from "./sub-post";

function PostItem(
    {
        post = {
            _id: 1,
            retweetUserName: "Elon Musk",
            avatarIcon: "/spacex.jpeg",
            userName: "SpaceX",
            handle: "SpaceX",
            time: '23h',
            title: "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → spacex.com/updates",
            commentCount: "4.2K",
            retweetCount: "3.5K",
            likeCount: "37.5K",
            subPostType: "subTweet",
            postImage: "dennis_akiko.jpeg",
            subTweet_avatarIcon: "/spacex.jpeg",
            subTweet_userName: "SpaceX",
            subTweet_handle: "SpaceX",
            subTweet_time: "15h",
            subTweet_title: "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → starlink.com/rv"
        }
    }
) {
    let retweet = post.retweetUserName + " Retweeted"
    const retweetdiv =
        <div className="row ">
            <div className="col-1">
                <div className="ms-1 ps-4 text-muted wd-text-ft-0-9em">
                    <i className="fa-solid fa-retweet"/>
                </div>
            </div>
            <div className="col-11 ps-4">
                <div className="ms-1 text-muted wd-text-ft-0-9em">
                    <b>{retweet}</b>
                </div>

            </div>
    </div>
    return (
        <div className="border border-2 border-light pt-3 pb-3 ps-3 pe-2 border-bottom-0">
            {post.retweetUserName.length > 0 ? retweetdiv : ""}
            <div className="row ">
                <div className="col-1">
                <img src={`/images/${post.avatarIcon}`} className="rounded-circle"
                     width="55px" height="55px" alt="Avatar Icon"/>
            </div>
                <div className="col-11 ">
                    <div className="ps-3">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <span className="">
                                    <b>{post.userName} </b>
                                    <i className="fa-solid fa-circle-check text-primary"/>
                                </span>
                                        <span className="text-muted ps-1"> @{post.handle} </span>
                                        <span className="text-muted"> &#183; {post.time}</span>
                            </div>
                            <div className="col-1">
                                <span className="text-muted">&#8943;</span>
                            </div>
                        </div>
                        <div className="mb-3 pe-1">
                            {post.title}
                        </div>
                    </div>
                    </div>

                    <div className="pe-2">
                        {<SubPost post={post}/>}
                    </div>

                    <div className="ps-3 row pt-3 text-muted">
                        <div className="col-sm">
                            <div>
                                <i className="fa-regular fa-comment"/>
                                <span className="ps-3">{post.commentCount}</span>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <i className="fa-solid fa-retweet"/>
                                <span className="ps-3">{post.retweetCount}</span>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <i className="fa-regular fa-heart"/>
                                <span className="ps-3">{post.likeCount}</span>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <i className="fa-solid fa-arrow-up-from-bracket"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
        
    );
}

export default PostItem;