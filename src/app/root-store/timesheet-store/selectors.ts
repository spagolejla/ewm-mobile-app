import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";

export const selectTimesheetState = createFeatureSelector<State>('timesheets');

export const selectCurrentTimesheet = createSelector(
    selectTimesheetState,
    (state) => {
        return state.currentTimesheet;
    }
);

