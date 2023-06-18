import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TaskComponent],
  imports: [
    IonicModule,
    CommonModule,
    TaskRoutingModule,
    HttpClientModule
  ]
})
export class TaskModule { }
