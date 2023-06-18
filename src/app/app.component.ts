import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as sharedSelectors from '../app/root-store/shared-store/selectors';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title$ = this.store$.select(sharedSelectors.selectTtile);
  
  constructor(private store$: Store<any>) {}
}
