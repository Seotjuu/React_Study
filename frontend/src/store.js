// store 생성할 때 import
import {configureStore} from '@reduxjs/toolkit'

// 프로젝트의 store 내에 slice 저장
import counterSlice from './reducers/counterSlice';

// store 생성
const store = configureStore({
    // slice reducer 통합
    // conter.up, counter.down
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;


