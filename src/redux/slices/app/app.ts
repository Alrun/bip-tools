import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './app.d';

const initialState: AppState = {
    locale: 'en',
    mode: 'auto',
    sidebarDense: false,
    menuExpanded: false
};

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setMode: (state, { payload }: PayloadAction<AppState['mode']>) => {
            state.mode = payload;
        },
        setSidebarDense: (state, { payload }: PayloadAction<AppState['sidebarDense']>) => {
            state.sidebarDense = payload;
        },
        setMenuExpanded: (state, { payload }: PayloadAction<AppState['menuExpanded']>) => {
            state.menuExpanded = payload;
        }
    }
});

export const { setSidebarDense, setMode, setMenuExpanded } = app.actions;

export default app.reducer;
