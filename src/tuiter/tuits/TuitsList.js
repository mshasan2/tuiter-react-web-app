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
    }, [dispatch])

    return(
        <div>
            {loading &&
             <div className="border border-2 border-light pt-3 pb-3 ps-3 pe-2 border-bottom-1">
                 Loading...
             </div>}
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