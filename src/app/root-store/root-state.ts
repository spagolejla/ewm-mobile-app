import { TaskState } from "./task-store";

export interface State {
    title: string;
    tasks: TaskState.State | null;

    // employees: EmployeeState.State | null;
    // projects: ProjectState.State | null;
    // timesheets: TimesheetState.State | null;
}

export const inititalState: State = {
    title: '',
    tasks: null,
    
    // employees: null,
    // projects: null,
    // timesheets: null
}