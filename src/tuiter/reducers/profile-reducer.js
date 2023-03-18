import {createSlice} from "@reduxjs/toolkit";
import profileArray from '../data/profileInfo.json'

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileArray,
    reducers: {
        updateDateOfBirth(state, action) {
            state[0].dateOfBirth = action.payload;
        },
        updateProfileHandler(state, action) {
            state[0].firstName = action.payload.firstName;
            state[0].lastName = action.payload.lastName;
            state[0].bio = action.payload.bio;
            state[0].location = action.payload.location;
            state[0].website = action.payload.website;
        }
    }
                                 })

export default profileSlice.reducer;
export const {updateDateOfBirth, updateProfileHandler} = profileSlice.actions;

