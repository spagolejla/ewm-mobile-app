import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Employee } from '../../models/employee.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent implements OnInit {

  formGroup!: FormGroup;
  @Input() userData: any;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController, private authService: AuthService) {
    this.formGroup = this.fb.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.passwordMatchValidator // Add custom validator to the form group
      }
    );
  }

  ngOnInit(): void {



  }

  // Custom validator function to compare old password with user's current password
  passwordMatchValidator(formGroup: FormGroup) {
    const oldPassword = formGroup.get('oldPassword')?.value;
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (formGroup.get('confirmPassword')?.dirty && newPassword != "" && newPassword !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }

    // Replace this logic with your actual check against the user's current password
    // You might want to call an API or use a service to validate the old password

    let userPass = JSON.parse(localStorage.getItem('auth_user') as string).password;
    if (formGroup.get('oldPassword')?.dirty && oldPassword != "" && userPass != oldPassword) {
      formGroup.get('oldPassword')?.setErrors({ invalidOldPassword: true });
    } else {
      formGroup.get('oldPassword')?.setErrors(null);
    }
  }


  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
    if (this.formGroup.valid) {
      const formRawData = this.formGroup.getRawValue();
      const user = {
        id: this.userData.id,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        startWorkDate: this.userData.startWorkDate,
        salaryPerHour: this.userData.salaryPerHour,
        active: this.userData.active,
        telephone: this.userData.telephone,
        position: this.userData.position,
        shortDescription: this.userData.shortDescription,
        avatarUrl: this.userData.avatarUrl,
        password: formRawData.newPassword
      } as Employee;

      return this.modalCtrl.dismiss(user, 'save');
    }

    return;
  }

}
