//import confiugre store, peopleRuducerrr

import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './reducer';

const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
//export
export default store;