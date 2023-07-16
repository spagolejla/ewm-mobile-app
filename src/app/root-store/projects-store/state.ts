import { Project } from "src/app/project/models/project.model";
import { Task } from "src/app/task/models/task.model";



export interface State {
    isLoading: boolean;
    projects: Array<Project>;
    selectedProjectTasks: Array<Task>;

    selectedProject?: Project;
    searchActive: boolean;
    searchValue: string;
};

export const initialState: State = {
    isLoading: false,
    projects: [],
    selectedProjectTasks: [],

    selectedProject: undefined,
    searchActive: false,
    searchValue: ""
};