import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';



@NgModule({
  declarations: [ProjectComponent, ProjectDetailsComponent],
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    ProjectRoutingModule,
    HttpClientModule
  ]
})
export class ProjectModule { }
