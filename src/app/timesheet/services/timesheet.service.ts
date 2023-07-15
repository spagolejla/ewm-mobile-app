import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Timesheet } from '../models/timesheet.model';


@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  URL: string = `${environment.apiUrl}/timesheet`;
  constructor(private httpClient: HttpClient) { }

  getTimesheetByDate(date: Date): Observable<Timesheet> {
    const options = date ?
      { params: new HttpParams().set('date', date.toDateString()) } : {};
    return this.httpClient.get<Timesheet>(this.URL + '/getTimesheetByDate/', options);
  }

  commitTimesheet(timesheet: Timesheet): Observable<Timesheet> {
    return this.httpClient.put(this.URL, timesheet, { observe: 'response' })
      .pipe(map((response: any) => {
        return response.body;
      }));
  }

}