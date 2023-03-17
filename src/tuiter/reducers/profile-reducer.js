import {createSlice} from "@reduxjs/toolkit";
import profileArray from '../data/profileInfo.json'

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileArray
                                 })

export default profileSlice.reducer;

