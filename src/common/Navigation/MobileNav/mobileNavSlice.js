import { createSlice } from "@reduxjs/toolkit";

const mobileNavSlice = createSlice({
    name: "mobileNav",
    initialState: {
        isDropdownMenuOpen: false,
    },
    reducers: {
        toggleDropdownMenu: state => {
            state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
        }
    },
});

export const { toggleDropdownMenu } = mobileNavSlice.actions;

const selectMobileNavState = state => state.mobileNav;
export const selectIsDropdownMenuOpen = state => selectMobileNavState(state).isDropdownMenuOpen;

export default mobileNavSlice.reducer;