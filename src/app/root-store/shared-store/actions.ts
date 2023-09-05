import { createAction, props, union } from "@ngrx/store";
import { Employee } from "src/app/profile/models/employee.model";

export enum ActionTypes {
    SET_TITLE = "[Shared] Set Title",
    SET_LOGGED_USER = "[Shared] Set LoggedInUser",
    NO_ACTION  = "[Task] No Action",
    ERROR  = "[Task] ERROR Action",
}

export const setTitle = createAction(ActionTypes.SET_TITLE, props<  { title: string } >());
export const setLoggedUser = createAction(ActionTypes.SET_LOGGED_USER, props<  { user: Employee | null } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());




  