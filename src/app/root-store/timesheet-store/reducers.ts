import { Action, createReducer, on } from "@ngrx/store";
import { initialState, State } from "./state";
import * as actions from './actions';


const deviceReducer = createReducer (
    initialState,
    on(actions.loadTimesheetSuccess, (state: State, { timesheet }) => {
      const tmpState = { ... state };
      tmpState.currentTimesheet = timesheet
      return tmpState;
    }),
);

export function reducer(state: State | undefined, action: Action ) {
    return deviceReducer(state, action)
}