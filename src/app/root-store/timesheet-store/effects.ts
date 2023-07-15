import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, concatMap, exhaustMap, map, of, switchMap } from "rxjs";
import { TimesheetService } from "src/app/timesheet/services/timesheet.service";
import { ActionTypes, noAction } from "./actions";
import * as timesheetActions from './actions'
import { TimesheetState } from ".";
import { Timesheet } from "src/app/timesheet/models/timesheet.model";


@Injectable()
export class TimesheetEffects {
    constructor(
        private actions$: Actions,
        private timesheetService: TimesheetService,
        private store$: Store<TimesheetState.State>
    ) { }


    loadTimesheets$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.LOAD_TIMESHEET_REQUEST),
            switchMap(action => this.timesheetService.getTimesheetByDate(action['date']).pipe(
                map(timesheet => timesheetActions.loadTimesheetSuccess({ timesheet })),
                catchError(() => of(noAction))
            ))
        )
    );

    updateTimesheetsRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.UPDATE_TIMESHEET_REQUEST),
            exhaustMap(action =>
                this.timesheetService.commitTimesheet(action['timesheet']).pipe(
                    concatMap((timesheet) => {
                        let tms = action['timesheet'] as Timesheet;
                        let date = new Date(tms.date)
                        return [
                            timesheetActions.updateTimesheetSuccess({ timesheet }),
                            timesheetActions.loadTimesheetRequest({ date })
                        ]
                    }),
                    catchError(error =>
                        of(timesheetActions.errorAction({ error }))
                    )
                )
            )
        )
    );
}