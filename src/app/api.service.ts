import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = "http://localhost:3000/v1/all-status";

  constructor(private httpClient: HttpClient) {

  }

  public getApiStatus(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

}
