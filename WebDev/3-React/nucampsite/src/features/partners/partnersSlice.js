import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return PARTNERS 
}

export const selectFeaturedPartner = (state) => {
    return  PARTNERS.find((campsite) => campsite.featured)
}