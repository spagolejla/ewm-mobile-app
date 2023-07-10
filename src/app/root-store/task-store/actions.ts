import { createAction, props, union } from "@ngrx/store";
import { Task } from "src/app/task/models/task.model";

export enum ActionTypes {
    LOAD_DATA_REQUEST = "[Task] Load Data Request",
    LOAD_DATA_SUCCESS = "[Task] Load Data Success",
    SET_SEARCH_VALUE = "[Task] Set Search Value",
    SET_SELECTED_TASK = "[Task] Set Selected Task",
    SAVE_TASK_REQUEST = '[Task] Save Task Request',
    SAVE_TASK_SUCCESS = '[Task] Save Task Success',
    UPDATE_TASK_REQUEST = '[Task] Update Task Request',
    UPDATE_TASK_SUCCESS = '[Task] Update Task Success',
    DELETE_TASK_REQUEST = '[Task] Delete Task Request',
    DELETE_TASK_SUCCESS = '[Task] Delete Task Success',
    START_TASK_REQUEST = '[Task] Start Task Request',
    START_TASK_SUCCESS = '[Task] Start Task Success',
    GET_ACTIVE_TASK_REQUEST = '[Task] Get Active Task Request',
    GET_ACTIVE_TASK_SUCCESS = '[Task] Get Active Task Success',
    STOP_TASK_REQUEST = '[Task] Stop Task Request',
    STOP_TASK_SUCCESS = '[Task] Stop Task Success',
    NO_ACTION  = "[Task] No Action",
    ERROR  = "[Task] ERROR Action",
}

export const loadDataRequest = createAction(ActionTypes.LOAD_DATA_REQUEST);
export const loadDataSuccess = createAction(ActionTypes.LOAD_DATA_SUCCESS, props<  { tasks: Array<Task> } >());
export const setSearchValue = createAction(ActionTypes.SET_SEARCH_VALUE, props<  { searchValue: string } >());
export const setSelectedTask = createAction(ActionTypes.SET_SELECTED_TASK, props<  { task: any } >());
export const saveTaskRequest = createAction(ActionTypes.SAVE_TASK_REQUEST, props<  { task: Task } >());
export const saveTaskSuccess = createAction(ActionTypes.SAVE_TASK_SUCCESS, props<  { task: Task } >());
export const updateTaskRequest = createAction(ActionTypes.UPDATE_TASK_REQUEST, props<  { task: Task } >());
export const updateTaskSuccess = createAction(ActionTypes.UPDATE_TASK_SUCCESS, props<  { task: Task } >());
export const deleteTaskRequest = createAction(ActionTypes.DELETE_TASK_REQUEST, props<  { taskId: string } >());
export const deleteTaskSuccess = createAction(ActionTypes.DELETE_TASK_SUCCESS);
export const startTaskRequest = createAction(ActionTypes.START_TASK_REQUEST, props<  { task: Task } >());
export const startTaskSuccess = createAction(ActionTypes.START_TASK_SUCCESS, props<  { task: Task } >());
export const stopTaskRequest = createAction(ActionTypes.STOP_TASK_REQUEST, props<  { task: Task } >());
export const stopTaskSuccess = createAction(ActionTypes.STOP_TASK_SUCCESS, props<  { task: Task } >());
export const getActiveTaskRequest = createAction(ActionTypes.GET_ACTIVE_TASK_REQUEST);
export const getActiveTaskSuccess = createAction(ActionTypes.GET_ACTIVE_TASK_SUCCESS, props<  { task: Task } >());
export const noAction = createAction(ActionTypes.NO_ACTION);
export const errorAction = createAction(ActionTypes.ERROR, props<  { error: any } >());


  