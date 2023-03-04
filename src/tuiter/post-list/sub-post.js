import React from "react";

function SubPost(
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
    let subDiv = ""
    if (post.subPostType === 'image') {
        subDiv = <div className="border border-light overflow-hidden wd-rounded-top-20
         wd-rounded-bottom-20">
            <img src={`/images/${post.postImage}`} className="w-100"
                 alt="Post"/>
        </div>
    } else if (post.subPostType === 'subTweet') {
        subDiv =
            <div className = "border border-light wd-rounded-top-20 wd-rounded-bottom-20">
                <div className="ps-3 pt-2 pb-2 pe-3">
                    <img className="rounded-circle"
                         src={`/images/${post.subTweet_avatarIcon}`} width={25}
                         alt={"SubTweet AvatarIcon"}/>
                    <span className="ps-1">
                        <span >
                            <b>{post.subTweet_userName} </b>
                            <i className="fa-solid fa-circle-check text-primary"/>
                        </span>
                        <span className="text-muted ps-1">@{post.subTweet_handle} </span>
                        <span className="text-muted"> &#183; {post.subTweet_time}</span>
                    </span>
                    <div>
                        {post.subTweet_title}
                    </div>
                </div>
            </div>
    }
    return (
        <div className="ps-3">
            {subDiv}
        </div>


    );

}

export default SubPost;