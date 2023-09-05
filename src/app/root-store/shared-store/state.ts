import { Employee } from "src/app/profile/models/employee.model";

export interface State {
    title: string;
    loggedInUser: Employee | null;

};

export const initialState: State = {
    title: '',
    loggedInUser: null
};