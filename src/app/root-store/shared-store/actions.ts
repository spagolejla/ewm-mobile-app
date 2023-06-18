import { createAction, props, union } from "@ngrx/store";

export enum ActionTypes {
    SET_TITLE = "[Shared] Set Title",
    NO_ACTION  = "[Task] No Action",
    ERROR  = "[Task] ERROR Action",
}

export const setTitle = createAction(ActionTypes.SET_TITLE, props<  { title: string } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());




  