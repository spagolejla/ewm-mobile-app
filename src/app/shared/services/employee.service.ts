import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/profile/models/employee.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL: string = `${environment.apiUrl}/employee`;
  constructor(private httpClient: HttpClient) { }


  updateEmployee(employee: Employee | any): Observable<Employee> {
    return this.httpClient.put(this.URL, employee)
      .pipe(map((response: any) => { return response; }));
  }

}
