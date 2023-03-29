import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    post,
    dispatch
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
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...post,
                                                                   likes: post.likes + 1
                                                               }))}
                       className="bi bi-heart-fill me-2 text-danger"/>
                    {post.likes}
                </div>

            </div>
            <div className="col-sm">
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...post,
                                                               dislikes: post.dislikes + 1
                                                           }))}
                    className="bi bi-hand-thumbs-down-fill"/>
                    {post.dislikes}
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