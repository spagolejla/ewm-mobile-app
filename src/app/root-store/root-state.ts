import { TaskState } from "./task-store";
import { TimesheetState } from "./timesheet-store";

export interface State {
    title: string;
    tasks: TaskState.State | null;
    timesheets: TimesheetState.State | null;
    // employees: EmployeeState.State | null;
    // projects: ProjectState.State | null;
}

export const inititalState: State = {
    title: '',
    tasks: null,
    timesheets: null
    // employees: null,
    // projects: null,
}