import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";


export const selectSharedState = createFeatureSelector<State>('shared');

const getTtile = (state: State): string => {
    return state.title;
}
export const selectTtile = createSelector(selectSharedState, getTtile);





