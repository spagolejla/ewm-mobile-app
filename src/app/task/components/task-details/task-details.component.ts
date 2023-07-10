import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskState } from 'src/app/root-store/task-store';
import * as taskActions from '../../../root-store/task-store/actions';
import * as taskSelectors from '../../../root-store/task-store/selectors';
import * as sharedActions from '../../../root-store/shared-store/actions';
import { TaskStatus } from '../../models/task-status.model';
import { Task } from '../../models/task.model';


@Component({
  selector: 'ewm-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent  implements OnInit {

  selectedTask$ = this.store$.select(taskSelectors.selectedTask);
  TaskStatus = TaskStatus;
  constructor(private store$: Store<TaskState.State>) { }

  ngOnInit() {
    this.selectedTask$.subscribe(value=> console.log(value));
  }

  startTask(task: Task) {
   this.store$.dispatch(taskActions.startTaskRequest({task}))
  }

  stopTask(task: Task) {
    task = { ...task, status: TaskStatus.Stopped };
    this.store$.dispatch(taskActions.stopTaskRequest({ task }))
  }

  finishTask(task: Task) {
    task = { ...task, status: TaskStatus.Finished };
    this.store$.dispatch(taskActions.stopTaskRequest({ task }))
  }

}
