import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TaskDetailsComponent } from './components/task-details/task-details.component';



@NgModule({
  declarations: [TaskComponent, TaskDetailsComponent],
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    TaskRoutingModule,
    HttpClientModule
  ]
})
export class TaskModule { }
