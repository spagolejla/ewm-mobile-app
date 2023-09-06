import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserDetailsComponent } from './components/edit-user-details/edit-user-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';



@NgModule({
  declarations: [ProfileComponent, EditUserDetailsComponent, ChangePasswordModalComponent],
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class ProfileModule { }
