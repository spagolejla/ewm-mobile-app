import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";

export const selectTimesheetState = createFeatureSelector<State>('timesheets');

export const selectCurrentTimesheet = createSelector(
    selectTimesheetState,
    (state) => {
        return state.currentTimesheet;
    }
);

export const selectNumberOfCompletedTasks = createSelector(
    selectCurrentTimesheet,
    (timesheet) => {
        if (timesheet && timesheet.workPeriods) {
            var workPeriods = timesheet.workPeriods.filter(x => x.end != undefined);
            var tasks = workPeriods.map( x=> x.task?.taskNo);
            var uniqueTasks = [...new Set(tasks.map(task => task))]
            return uniqueTasks.length;
        }

        return 0;
        return 
    }
);

