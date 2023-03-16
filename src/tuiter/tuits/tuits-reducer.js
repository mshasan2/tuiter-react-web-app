import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}



const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeTuitHandler(state, action) {
            const tuitIndex = state.findIndex(item =>
                item._id === action.payload._id
            )
            if (state[tuitIndex].liked) {
                state[tuitIndex].likes--;
            }
            else {
                state[tuitIndex].likes++;
            }
            state[tuitIndex].liked = !state[tuitIndex].liked;

        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
                          })
        },

        deleteTuit(state, action) {
            const tuitIndex =
                state.findIndex(item => item._id === action.payload)
                state.splice(tuitIndex, 1)
        }
    }
                               });

export default tuitsSlice.reducer;
export const {likeTuitHandler, createTuit, deleteTuit} = tuitsSlice.actions;