import { Timesheet } from "src/app/timesheet/models/timesheet.model";


export interface State {
    isLoading: boolean;
    currentTimesheet?: Timesheet;
};

export const initialState: State = {
    isLoading: false,
    currentTimesheet: undefined,
};