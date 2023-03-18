import {createSlice} from "@reduxjs/toolkit";
import profileArray from '../data/profileInfo.json'

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileArray,
    reducers: {
        updateDateOfBirth(state, action) {
            state[0].dateOfBirth = action.payload;
        }
    }
                                 })

export default profileSlice.reducer;
export const {updateDateOfBirth} = profileSlice.actions;

