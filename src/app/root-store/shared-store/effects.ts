import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as sharedActions from './actions'
import { SharedState } from ".";


@Injectable()
export class SharedEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<SharedState.State>
    ) { }

 
}