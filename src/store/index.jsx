import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './countySlice'


export const store = configureStore({
    reducer :{
        country : countryReducer
    }
})

export default store;