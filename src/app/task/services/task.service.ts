import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL: string = `${environment.apiUrl}/task`;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.URL);
  }

  getActiveTask(id: string | undefined): Observable<Task> {
    return this.httpClient.get<Task>(this.URL + '/activeTask/' + id);
  }

  getTasksByProject(projectId: string | undefined): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.URL + '/project/' + projectId);
  }

  getTasksByUser(): Observable<Array<Task>> {
    let userId = this.authService.getUser()?.id;
    return this.httpClient.get<Array<Task>>(this.URL + '/user/' + userId);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post(this.URL, task, { observe: 'response' })
      .pipe(map((response: any) => {
        return response.body;
      }));
  }

  startTask(task: Task): Observable<Task> {
    return this.httpClient.put(this.URL + '/startTask', task, { observe: 'response' })
      .pipe(map((response: any) => {
        return response.body;
      }));
  }

  stopTask(task: Task): Observable<Task> {
    return this.httpClient.put(this.URL + '/stopTask', task, { observe: 'response' })
      .pipe(map((response: any) => {
        return response.body;
      }));
  }


  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put(this.URL, task)
      .pipe(map((response: any) => { return response; }));
  }

  deleteTask(id: string): Observable<boolean> {
    return this.httpClient.delete(this.URL + '/' + id)
      .pipe(map(() => { return true; }));
  }





}
