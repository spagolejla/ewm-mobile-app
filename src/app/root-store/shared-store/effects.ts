import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as sharedActions from './actions'
import { SharedState } from ".";
import { EmployeeService } from "src/app/shared/services/employee.service";
import { catchError, concatMap, exhaustMap, map, Observable, of, switchMap } from "rxjs";
import { ActionTypes } from "./actions";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable()
export class SharedEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<SharedState.State>,
        private employeeService: EmployeeService,
        private authService: AuthService,
        private toastService: ToastService,
        private router: Router,
    ) { }

    updateUserRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.UPDATE_USER_REQUEST),
            exhaustMap(action =>
                this.employeeService.updateEmployee(action['user']).pipe(
                    concatMap((user) => {
                        this.authService.setUser(user);
                        this.toastService.presentToast('bottom', "Edited sucessfuly!")
                        return [sharedActions.updateUserSuccess({ user }),
                        sharedActions.setLoggedUser({ user: action['user'] })]
                    }),
                    catchError(error =>
                        of(sharedActions.errorAction({ error }))
                    )
                )
            )
        )
    );

    updateUserPasswordRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.UPDATE_USER_PASSWORD_REQUEST),
            exhaustMap(action =>
                this.employeeService.updateEmployee(action['user']).pipe(
                    concatMap((user) => {
                        this.authService.logout();
                        this.router.navigate([`login`])
                        this.toastService.presentToast('bottom', "Password changed sucessfuly, please login again!")
                        return [sharedActions.setLoggedUser({ user: null }),
                        sharedActions.updateUserSuccess({ user }),
                        ]
                    }),
                    catchError(error =>
                        of(sharedActions.errorAction({ error }))
                    )
                )
            )
        )
    );


}