import { Component, OnDestroy, OnInit } from '@angular/core';
import * as projectActions from '../../../root-store/projects-store/actions';
import * as projectSelectors from '../../../root-store/projects-store/selectors';
import { ProjectStatus } from '../../models/project-status-model';
import { Store } from '@ngrx/store';
import { ProjectState } from 'src/app/root-store/projects-store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  selectedProject$ = this.store$.select(projectSelectors.selectedProject);
  selectedProjectTasks$ = this.store$.select(projectSelectors.selectedProjectTasks);

  ProjectStatus = ProjectStatus;
  subscriptions: Subscription[] = [];

  constructor(private store$: Store<ProjectState.State>) { }


  ngOnInit() {
    this.subscriptions.push(this.selectedProject$.subscribe(project => {
      if (project) {
        this.store$.dispatch(projectActions.loadTasksByProjectRequest({ projectId: project.id }));
      }
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

}
