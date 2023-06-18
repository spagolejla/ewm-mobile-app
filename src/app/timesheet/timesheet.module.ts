import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TimesheetRoutingModule } from './timesheet-routing.module';



@NgModule({
  declarations: [TimesheetComponent],
  imports: [
    CommonModule,
    TimesheetRoutingModule
  ]
})
export class TimesheetModule { }
