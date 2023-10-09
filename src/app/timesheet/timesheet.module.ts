import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../shared/models/modules/material-design.module';
import { HoursMinutesPipe } from '../shared/pipes/hours-minutes.pipe';



@NgModule({
  declarations: [TimesheetComponent, HoursMinutesPipe],
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    TimesheetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ]
})
export class TimesheetModule { }
