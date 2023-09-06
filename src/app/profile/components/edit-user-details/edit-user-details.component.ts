import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss'],
})
export class EditUserDetailsComponent implements OnInit {

  formGroup!: FormGroup;
  @Input() userData: any;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController) { }

  ngOnInit(): void {

    this.formGroup = this.fb.group(
      {
        shortDescription: ["", Validators.required],
        position: ["", Validators.required],
        telephone: ["", Validators.required],
        avatarUrl: [""]
      },
    );

    this.patchForm();
  }

  get fControls(): any {
    return this.formGroup.controls;
  }

  patchForm() {
    this.formGroup.patchValue({
      shortDescription: this.userData.shortDescription,
      position: this.userData.position,
      telephone: this.userData.telephone,
      avatarUrl: this.userData.avatarUrl,
    });
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
        password: this.userData.password,
        startWorkDate: this.userData.startWorkDate,
        salaryPerHour: this.userData.salaryPerHour,
        active: this.userData.active,
        telephone: formRawData.telephone,
        position: formRawData.position,
        shortDescription: formRawData.shortDescription,
        avatarUrl: formRawData.avatarUrl,
      } as Employee;

      return this.modalCtrl.dismiss(user, 'save');
    }

    return;
  }

}
