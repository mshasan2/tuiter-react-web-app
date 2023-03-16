import React from "react";

const TuitStats = (
    post ,
    likeHandler
) => {

    return (
        <div className="ps-3 row pt-3 text-muted">
            <div className="col-sm">
                <div>
                    <i className="fa-regular fa-comment"/>
                    <span className="ps-3">{post.replies}</span>
                </div>
            </div>
            <div className="col-sm">
                <div>
                    <i className="fa-solid fa-retweet"/>
                    <span className="ps-3">{post.retuits}</span>
                </div>
            </div>
            <div className="col-sm">
                <div>
                    <i className={post.liked ?
                                  `fa-solid fa-heart text-danger` :
                                  `fa-regular fa-heart`
                                }
                    onClick={() => likeHandler(post)}/>
                    <span className="ps-3">{post.likes}</span>

                </div>
            </div>
            <div className="col-sm">
                <div>
                    <i className="fa-solid fa-share-nodes"/>
                </div>
            </div>
        </div>
    )
};

export default TuitStats;