import { createAction, props } from "@ngrx/store";
import { Timesheet } from "src/app/timesheet/models/timesheet.model";

export enum ActionTypes {
    LOAD_TIMESHEET_REQUEST = "[Timesheet] Load Timesheet Request",
    LOAD_TIMESHEET_SUCCESS = "[Timesheet] Load Timesheet Success",
    UPDATE_TIMESHEET_REQUEST = '[Timesheet] Update Timesheet Request',
    UPDATE_TIMESHEET_SUCCESS = '[Timesheet] Update Timesheet Success',
    NO_ACTION  = "[Timesheet] No Action",
    ERROR  = "[Timesheet] ERROR Action",
}

export const loadTimesheetRequest = createAction(ActionTypes.LOAD_TIMESHEET_REQUEST, props<  { date: Date | undefined | null } >());
export const loadTimesheetSuccess = createAction(ActionTypes.LOAD_TIMESHEET_SUCCESS, props<  { timesheet: Timesheet } >());
export const updateTimesheetRequest = createAction(ActionTypes.UPDATE_TIMESHEET_REQUEST, props<  { timesheet: Timesheet } >());
export const updateTimesheetSuccess = createAction(ActionTypes.UPDATE_TIMESHEET_SUCCESS, props<  { timesheet: Timesheet } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());