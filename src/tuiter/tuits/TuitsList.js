import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <div>
            {loading}
            {

                tuits.map(item =>
                                  <TuitItem post={item}
                                  key = {item._id}/>
                )
            }
        </div>
    );

};

export default TuitsList;