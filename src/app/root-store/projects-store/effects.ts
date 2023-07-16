import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, concatMap, exhaustMap, map, Observable, of, switchMap, withLatestFrom } from "rxjs";
import { ProjectService } from "src/app/project/services/project.service";
import { ActionTypes, loadDataSuccess, noAction } from "./actions";
import * as projectActions from './actions'
import * as projectSelectors from './selectors'
import { ProjectState } from ".";
import { TaskService } from "src/app/task/services/task.service";
import { Project } from "src/app/project/models/project.model";


@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private taskService: TaskService,
        private store$: Store<ProjectState.State>
    ) { }

    loadProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.LOAD_DATA_REQUEST),
            switchMap(() => this.projectService.getProjects().pipe(
                map(projects => loadDataSuccess({ projects })),
                catchError(() => of(noAction))
            ))
        )
    );


    loadTasksByProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.LOAD_TASKS_BY_PROJECT_REQUEST),
            switchMap(action => this.taskService.getTasksByProject(action['projectId']).pipe(
                map(tasks => projectActions.loadTasksByProjectSuccess({ tasks })),
                catchError(() => of(noAction))
            ))
        )
    );








}