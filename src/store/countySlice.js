import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countyData from "../components/Home/api";


export const fetchCountyData = createAsyncThunk(
    "county/fetch-data",
    async (_,{ rejectWithValue}) => {
        try {
            const res = await countyData()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const countrySlice = createSlice({
    name : "country",
    initialState :{
        list :[],
        loading :false,
        error :"",
    },
    extraReducers : (builder)=>{
       builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
})

export default countrySlice.reducer;