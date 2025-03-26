import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }
  saveExamData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ssc-exam-data`, data);
  }

  rrbConstable(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/rrb-constable-exam-data`,data)
  }

}
