import { Employee } from "../profile/models/employee.model";
import { ProjectState } from "./projects-store";
import { TaskState } from "./task-store";
import { TimesheetState } from "./timesheet-store";

export interface State {
    title: string;
    tasks: TaskState.State | null;
    timesheets: TimesheetState.State | null;
    projects: ProjectState.State | null;
}

export const inititalState: State = {
    title: '',
    tasks: null,
    timesheets: null,
    projects: null,
}