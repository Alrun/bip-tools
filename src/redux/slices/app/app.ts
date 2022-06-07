import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ThemeModeType} from '../../../componets/ThemeModeSwitch/ThemeModeSwitch.d'

export interface AppState {
    locale: string;
    mode: ThemeModeType;
    drawerDense: boolean;
    sidebarExpanded: false | string;
}

const initialState: AppState = {
    locale: 'en',
    mode: 'auto',
    drawerDense: false,
    sidebarExpanded: false,
};

export const appLocal = createSlice({
    name: 'appLocal',
    initialState,
    reducers: {
        setMode: (state, { payload }: PayloadAction<ThemeModeType>) => {
            state.mode = payload;
        },
        drawerDenseToggle: (state, { payload }: PayloadAction<boolean>) => {
            state.drawerDense = payload;
        },
        sidebarExpand: (state, { payload }: PayloadAction<false | string>) => {
            state.sidebarExpanded = payload;
        },
    }
});

export const { setMode, drawerDenseToggle, sidebarExpand } = appLocal.actions;
export default appLocal.reducer;
