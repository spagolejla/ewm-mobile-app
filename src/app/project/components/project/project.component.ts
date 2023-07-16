import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as projectActions from '../../../root-store/projects-store/actions';
import * as projectSelectors from '../../../root-store/projects-store/selectors';
import * as sharedActions from '../../../root-store/shared-store/actions';
import { Router } from '@angular/router';
import { ProjectState } from 'src/app/root-store/projects-store';
import { ProjectStatus } from '../../models/project-status-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent  implements OnInit {

  projects$ = this.store$.select(projectSelectors.selectFilteredProjects);
  ProjectStatus = ProjectStatus;

  constructor(private store$: Store<ProjectState.State>, private router: Router) { }

  ngOnInit() {
    this.store$.dispatch(sharedActions.setTitle({title: 'Projects'}))
    this.store$.dispatch(projectActions.loadDataRequest())

    this.projects$.subscribe(value => console.log(value));
  }

  openDetails(id: string) {
     this.router.navigate([`tabs/project/details/${id}`])
  }

}
