import {createSlice} from "@reduxjs/toolkit";
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}





const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] : (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled] : (state, {payload}) => {
            state.loading = false
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            const tuitNdx = state.tuits.findIndex((t) =>
                                                      t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            }
        }
    },
    reducers: {}
                                   /*{
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
    }*/
                               });

export default tuitsSlice.reducer;
/*
export const {likeTuitHandler, createTuit, deleteTuit} = tuitsSlice.actions;*/
