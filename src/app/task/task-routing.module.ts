import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  },
  {
    path: 'details/:id',
    component: TaskDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
