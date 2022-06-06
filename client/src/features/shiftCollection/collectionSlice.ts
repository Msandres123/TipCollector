import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Shift } from "../../app/models/shift";
import { RootState } from "../../app/store/configureStore";

const shiftsAdapter = createEntityAdapter<Shift>();

export const fetchShiftsAsync = createAsyncThunk<Shift[]>(
    'shiftCollection/fetchShiftsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.ShiftCollection.list()
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }

    }
)

export const fetchShiftAsync = createAsyncThunk<Shift, number>(
    'shiftCollection/fetchShiftAsync',
    async (shiftId, thunkAPI) => {
        try {
            return await agent.ShiftCollection.details(shiftId)
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }

    }
)

export const collectionSlice = createSlice({
    name: 'shiftCollection',
    initialState: shiftsAdapter.getInitialState({
        shiftsLoaded: false,
        status: 'idle'
    }),
    reducers: {
        setShift: (state, action) => {
            shiftsAdapter.upsertOne(state, action.payload);
            state.shiftsLoaded = false
        },
        removeShift: (state, action) => {
            shiftsAdapter.removeOne(state, action.payload);
            state.shiftsLoaded = false
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchShiftsAsync.pending, (state) => {
            state.status = 'pendingFetchShifts'
        });
        builder.addCase(fetchShiftsAsync.fulfilled, (state, action) => {
            shiftsAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.shiftsLoaded = true;
        });
        builder.addCase(fetchShiftsAsync.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'idle'
        });
        builder.addCase(fetchShiftAsync.pending, (state) => {
            state.status = 'pendingFetchShift';
        });
        builder.addCase(fetchShiftAsync.fulfilled, (state, action) => {
            shiftsAdapter.upsertOne(state, action.payload);
            state.status = 'idle'
        });
        builder.addCase(fetchShiftAsync.rejected, (state, action) => {
            console.log(action)
            state.status = 'idle'
        })
    })
})

export const shiftSelectors = shiftsAdapter.getSelectors((state: RootState) => state.collection)

export const { setShift, removeShift } = collectionSlice.actions