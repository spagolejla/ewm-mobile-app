import { Task } from "src/app/task/models/task.model";



export interface State {
    isLoading: boolean;
    tasks: Array<Task>;
    selectedTask?: Task;
    searchActive: boolean;
    searchValue: string;
    activeTask?: Task;

};

export const initialState: State = {
    isLoading: false,
    tasks: [],
    selectedTask: undefined,
    searchActive: false,
    searchValue: "",
    activeTask: undefined
};