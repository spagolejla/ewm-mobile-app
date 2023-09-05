import { Action, createReducer, on } from "@ngrx/store";
import { initialState, State } from "./state";
import * as actions from './actions';


const deviceReducer = createReducer(
  initialState,
  on(actions.setTitle, (state: State, { title }) => {
    const tmpState = { ...state };
    tmpState.title = title
    return tmpState;
  }),
  on(actions.setLoggedUser, (state: State, { user }) => {
    const tmpState = { ...state };
    tmpState.loggedInUser = user
    return tmpState;
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return deviceReducer(state, action)
}