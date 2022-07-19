import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Thesis } from './thesis';

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  private apiURL = "http://localhost:8000/api/thesis/";




  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Thesis[]> {
    return this.httpClient.get<any>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(thesis:Thesis): Observable<any> {
    return this.httpClient.post<any>(this.apiURL, JSON.stringify(thesis), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id:number): Observable<any> {
    return this.httpClient.get<Thesis>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id:number, thesis:Thesis): Observable<any> {
    return this.httpClient.put<any>(this.apiURL + id, JSON.stringify(thesis), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id:number){
    return this.httpClient.delete<any>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



}
