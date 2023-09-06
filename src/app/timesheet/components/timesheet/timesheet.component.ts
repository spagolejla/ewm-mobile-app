import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

import { TimesheetState } from 'src/app/root-store/timesheet-store';
import { TimesheetStatus } from '../../models/timesheet-status.model';
import { Timesheet } from '../../models/timesheet.model';
import { TimesheetAction } from '../../models/timesheet-action.model';
import { v4 as uuidv4 } from 'uuid';

import * as timesheetActions from '../../../root-store/timesheet-store/actions';
import * as timesheetSelectors from '../../../root-store/timesheet-store/selectors';
import * as sharedActions from '../../../root-store/shared-store/actions';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  disabled: boolean | undefined = false;
  currentTimesheet$ = this.store$.select(timesheetSelectors.selectCurrentTimesheet).pipe(tap((timesheet) => {
    this.disabled = this.compareDates(timesheet && timesheet.date, new Date());
    if (timesheet && timesheet.date) {
      this.displayedDate = new Date(timesheet.date)
    }
  }));
  TimesheetStatus = TimesheetStatus;
  displayedDate = new Date();
  comment = new FormControl('');

  constructor(
    private store$: Store<TimesheetState.State>, 
    private toastController: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
    this.store$.dispatch(sharedActions.setTitle({ title: 'Timesheets' }));
    this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: new Date }));
  }

  previousTimesheet() {
    var dateValue = new Date(this.displayedDate);
    dateValue.setDate(dateValue.getDate() - 1);
    this.displayedDate = dateValue;
    this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: dateValue }));
  }

  nextTimesheet() {
    var dateValue = new Date(this.displayedDate);
    dateValue.setDate(dateValue.getDate() + 1);
    this.displayedDate = dateValue;
    this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: dateValue }));
  }

  compareDates(date1: Date | undefined, date2: Date) {
    if (date1) {
      return new Date(date1).getDate() == date2.getDate()
    }

    return false;
  }

  getTimesheetStatus(status: number) {
    return TimesheetStatus[status];
  }

  async sumbmitTimesheet(timesheet: Timesheet) {
    if (timesheet.workPeriods?.find(wp => wp.end == null)) {
      const toast = await this.toastController.create({
        message: 'Stop/Finish open task before submiting.',
        duration: 2500,
        position: 'bottom',
      });
  
      await toast.present();
      this.comment.reset();
      return;
    }
    let user = this.authService.getUser();
    let newAction: TimesheetAction = {
      id: uuidv4(),
      status: TimesheetStatus.Submited,
      comment: this.comment.value,
      user: { id: user?.id, name: user?.firstName + ' ' + user?.lastName },
      date: new Date()
    }
    timesheet = { ...timesheet, status: TimesheetStatus.Submited, actions: timesheet.actions?.map(action => action) };
    timesheet.actions?.push(newAction);

    this.store$.dispatch(timesheetActions.updateTimesheetRequest({ timesheet }));
  }

  doRefresh(event: any) {
    setTimeout(() => {
      var dateValue = new Date(this.displayedDate);
      this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: dateValue }));
      event.target.complete();
    }, 1000);
  }

}
