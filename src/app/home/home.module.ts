import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
