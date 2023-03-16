import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <div>
            {
                tuitArray.map(item =>
                                  <TuitItem post={item}
                                  key = {item._id}/>
                )
            }
        </div>
    );

};

export default TuitsList;