import { createAction, props, union } from "@ngrx/store";
import { Employee } from "src/app/profile/models/employee.model";

export enum ActionTypes {
    SET_TITLE = "[Shared] Set Title",
    SET_LOGGED_USER = "[Shared] Set LoggedInUser",
    UPDATE_USER_REQUEST = '[Shared] Update Employee Request',
    UPDATE_USER_SUCCESS = '[Shared] Update Employee Success',
    UPDATE_USER_PASSWORD_REQUEST = '[Shared] Update User Password Request',
    UPDATE_USER_PASSWORD_SUCCESS = '[Shared] Update User Password Success',
    NO_ACTION  = "[Task] No Action",
    ERROR  = "[Task] ERROR Action",
}

export const setTitle = createAction(ActionTypes.SET_TITLE, props<  { title: string } >());
export const setLoggedUser = createAction(ActionTypes.SET_LOGGED_USER, props<  { user: Employee | null } >());
export const updateUserRequest = createAction(ActionTypes.UPDATE_USER_REQUEST, props<  { user: Employee } >());
export const updateUserSuccess = createAction(ActionTypes.UPDATE_USER_SUCCESS, props<  { user: Employee } >());
export const updateUserPasswordRequest = createAction(ActionTypes.UPDATE_USER_PASSWORD_REQUEST, props<  { user: Employee } >());
export const updateUserPasswordSuccess = createAction(ActionTypes.UPDATE_USER_PASSWORD_SUCCESS, props<  { user: Employee } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());




  