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
    },
    preloadedState: loadStateFromLocalStorage()
});

// 로컬 스토리지에서 상태 불러오기
function loadStateFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('storeKey');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  }

// 상태 변경 시에 로컬 스토리지에 저장
store.subscribe(() => {
    const state = store.getState();
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('storeKey', serializedState);
    } catch (error) {
      console.error('Failed to save state to local storage:', error);
    }
  });

export default store;


