import React from "react";
import PostItem from "../post-list/post-list-item";
import postArray from "../post-list/posts.json";

const HomeComponent = () => {
    return(
        <div>
            {
                postArray.map(item =>
                <PostItem post={item}
                          key = {item._id}/>
            )
            }
        </div>

    );
};
export default HomeComponent;

