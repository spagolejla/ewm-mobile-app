import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { SharedStoreModule } from "./shared-store";
import { TasksStoreModule } from "./task-store";
import { TimesheetsStoreModule } from "./timesheet-store";
import { ProjectsStoreModule } from "./projects-store";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot([
      // routes
    ]),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
    SharedStoreModule,
    TasksStoreModule,
    TimesheetsStoreModule,
    ProjectsStoreModule
  ]
})
export class RootStoreModule { }
