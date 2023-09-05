import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";
import { Employee } from "src/app/profile/models/employee.model";


export const selectSharedState = createFeatureSelector<State>('shared');

const getTtile = (state: State): string => {
    return state.title;
}

const getLoggedInUser = (state: State): Employee | null => {
    return state.loggedInUser;
}

export const selectTtile = createSelector(selectSharedState, getTtile);
export const selectLoggedInUser = createSelector(selectSharedState, getLoggedInUser);






