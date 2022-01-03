import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
// Server
  api_url = "http://darient-api-shoes.somee.com/";

  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


  /**
  * @desc function get service
  * @param string $path - the endpoint of the api
  * @param object $headers - header object of the service
  * @return promise - promise http
  */
  get(path: string, headers: any = {}): Observable<any> {
    return this.http.get(this.api_url + path).pipe(
      timeout(1000 * 20),
      catchError(this.handleError)
    )
  }

  /**
  * @desc function post service
  * @param string $path - the endpoint of the api
  * @param object $headers - header header of the service
  * @return promise - promise http
  */
  post(obj: any, path: String, headers: any): Observable<any> {
    return this.http.post<any>(this.api_url + path, obj, headers)
      .pipe(
        timeout(1000 * 20),
        catchError(this.handleError)
      )
  }

  /**
  * @desc function post service
  * @param string $path - the endpoint of the api
  * @param object $headers - header header of the service
  * @return promise - promise http
  */
  put(obj:any, path: string, headers: any): Observable<any> {
    return this.http.put<any>(this.api_url + path, obj, headers)
    .pipe(
      timeout(1000 * 20),
      catchError(this.handleError)
    )
  }

    /**
  * @desc function post service
  * @param string $path - the endpoint of the api
  * @param object $headers - header header of the service
  * @return promise - promise http
  */
    delete(obj:any, path: string, headers: any): Observable<any> {
      return this.http.delete<any>(this.api_url + path, headers)
      .pipe(
        timeout(1000 * 20),
        catchError(this.handleError)
      )
    }

}