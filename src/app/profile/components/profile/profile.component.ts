import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as sharedSelectors from '../../../root-store/shared-store/selectors';
import * as sharedActions from '../../../root-store/shared-store/actions';

import { ModalController } from '@ionic/angular';
import { EditUserDetailsComponent } from '../edit-user-details/edit-user-details.component';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loggedUser$ = this.store$.select(sharedSelectors.selectLoggedInUser);

  constructor(private store$: Store<any>, private modalCtrl: ModalController) { }

  ngOnInit() { }

  async changePassword(user: any) {
    const modal = await this.modalCtrl.create({
      component: ChangePasswordModalComponent,
      componentProps: {
        userData: user,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      this.store$.dispatch(sharedActions.updateUserPasswordRequest({ user: data }))
    }
  }

  async editDetails(user: any) {
    const modal = await this.modalCtrl.create({
      component: EditUserDetailsComponent,
      componentProps: {
        userData: user, // Pass the data you want to send as a property
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      this.store$.dispatch(sharedActions.updateUserRequest({ user: data }))
    }
  }
}
