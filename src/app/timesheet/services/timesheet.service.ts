import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Timesheet } from '../models/timesheet.model';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  URL: string = `${environment.apiUrl}/timesheet`;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getTimesheetByDate(date: Date): Observable<Timesheet> {
    let userId = this.authService.getUser()?.id as string;
    const options = date ?
      { params: new HttpParams().set('date', date.toDateString()).set('userId', userId) } : {};
    return this.httpClient.get<Timesheet>(this.URL + '/getUserTimesheetByDate', options);
  }

  commitTimesheet(timesheet: Timesheet): Observable<Timesheet> {
    return this.httpClient.put(this.URL, timesheet, { observe: 'response' })
      .pipe(map((response: any) => {
        return response.body;
      }));
  }

}