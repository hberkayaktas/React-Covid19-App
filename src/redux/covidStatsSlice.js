import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getValue = createAsyncThunk('covidStats/getValue', async (data) => {
      if(!data){
            console.log("data yok case");
            const res = await axios(`https://covid19.mathdro.id/api`);
            return await res.data;
      }else{
            console.log("data geldi case");
            const res = await axios(`https://covid19.mathdro.id/api/countries/${data}`);
            return await res.data;
      }
})
export const getCountry = createAsyncThunk('covidStats/getCountry', async (data) => {
      console.log(data);
      const res = await axios(`https://covid19.mathdro.id/api/countries`);
      return await res.data;
})
// https://covid19.mathdro.id/api/daily
export const getMainData = createAsyncThunk('covidStats/getMainData', async () => {
      const res = await axios(`https://covid19.mathdro.id/api/daily`);
      return await res.data;
})
export const covidStatsSlice = createSlice({
      name:"covidStats",
      initialState:{
            confirmed:0,
            recovered:0,
            deaths:0,
            activeCase:0,
            activeCountry: "Global",
            lastupdate : "",
            Taken_country : [],
            getDailyConts: [],
            isLoading:false,
            error:null,
      },
      reducers:{
            setActiveCountry:(state,action) => {  
                  state.activeCountry = action.payload;
            }
      },
      extraReducers:{
            // get Total value
            [getValue.pending]: (state,action) =>{
                  state.isLoading = true;
            },
            [getValue.fulfilled]:(state,action) => {
                 // state.Taken_country = action.payload.countries;
                 // console.log(action.payload);
                  state.recovered = action.payload.recovered.value || 0;
                  state.confirmed = action.payload.confirmed.value || 0;
                  state.deaths = action.payload.deaths.value || 0;
                  state.lastupdate = action.payload.lastUpdate;
                  state.activeCase = action.payload.confirmed.value -action.payload.deaths.value;
                  state.isLoading = false;
            },
            [getValue.rejected]:(state,action) => {
                  state.error =action.error.message;
                  state.isLoading = false;
            },
            // get Country list
            [getCountry.pending]: (state,action) =>{
                  state.isLoading = true;
            },
            [getCountry.fulfilled]:(state,action) => {
                  state.Taken_country = action.payload.countries;
                  state.isLoading = false;
            },
            [getCountry.rejected]:(state,action) => {
                  state.error =action.error.message;
                  state.isLoading = false;
            },
            // getMainData
            [getMainData.pending]: (state,action) =>{
                  state.isLoading = true;
            },
            [getMainData.fulfilled]:(state,action) => {
                  //console.log(action.payload);
                  state.getDailyConts = action.payload;
                  state.isLoading = false;
            },
            [getMainData.rejected]:(state,action) => {
                  state.error =action.error.message;
                  state.isLoading = false;
            },
      }
});
export const Taken_country = (state) => state.covidStats.Taken_country;



export const { setActiveCountry } = covidStatsSlice.actions;
export default covidStatsSlice.reducer;