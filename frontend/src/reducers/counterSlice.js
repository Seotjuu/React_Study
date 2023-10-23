// slice 생성하기 위해 import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// react-Redux-Thunk
export const asyncUpFetch = createAsyncThunk(
    'counterSlice/asyncUpFetch',
    async () => {
        const res = await axios.get(`http://localhost:4000/post/postList`);
        
        return res.data.id
    }
)

// Counter slice 생성 ( 작은 store)
const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0, status: 'Welcome'},
    reducers: {
        init: (state) => {
            state.value = 0;
            console.log(state.value);
        },
        up: (state, action) => {
            // toolkit이 불변성 유지해줌
            state.value = state.value + action.payload;
            console.log(state.value);
        },
        down: (state, action) => {
            state.value = state.value - action.payload;
            console.log(state.value);
        },
        edit: (state, action)=> {
            state.value = action.payload
            console.log(state.value);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncUpFetch.pending, (state, action)=>{
            state.status = "Loading";
        })
        builder.addCase(asyncUpFetch.fulfilled, (state, action)=>{
            state.value = action.payload
            state.status = "complete";
        })
        builder.addCase(asyncUpFetch.rejected, (state, action)=>{
            state.status = "fail";
        })
    }
});

export default counterSlice;
// 길게 사용하지 않고 간결하게 사용하기 위해
// counterSlice.actions.init() => init()
export const {init, up, down, edit} = counterSlice.actions
