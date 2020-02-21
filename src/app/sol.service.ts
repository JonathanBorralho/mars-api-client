import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sol } from './model/sol.model';

@Injectable({
  providedIn: 'root'
})
export class SolService {

  constructor(private http: HttpClient) { }

  getSols(): Observable<Sol[]> {
    return this.http.get<Sol[]>('http://localhost:8080/api/sols');
  }
}
