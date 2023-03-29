import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = { "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="border border-2 border-light pt-3 pb-3 ps-3 pe-2 border-bottom-1">
            <div className="row ">
                <div className="col-sm-2 col-md-1">
                    <img src={`/images/${post.image}`} className="rounded-circle"
                         width="55px" height="55px" alt="Avatar Icon"/>
                </div>
                <div className="col-sm-10 col-md-11 ">
                    <div className="ps-3">
                        <div>
                            <div className="row">
                                <div className="col-sm-10 col-md-11">
                                <span className="">
                                    <b>{post.userName} </b>
                                    <i className="fa-solid fa-circle-check text-primary"/>
                                </span>
                                    <span className="text-muted ps-1"> {post.handle} </span>
                                    <span className="text-muted"> &#183; {post.time}</span>
                                </div>
                                <div className="col-sm-2 col-md-1">
                                    <i className="bi bi-x-lg float-end pe-2"
                                    onClick={() => deleteTuitHandler(post._id)}/>
                                </div>
                            </div>
                            <div className="mb-1 pe-1">
                                {post.tuit}
                            </div>
                        </div>
                    </div>

                    {TuitStats(post, dispatch)}


                </div>

            </div>



        </div>


    )
};

export default TuitItem;