import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
// Server
  api_url = environment.apiUrl
  headers = new HttpHeaders()

  constructor(private http: HttpClient) {
    this.headers.append("Content-Type","application/json")
    this.headers.append('Access-Control-Allow-Origin', '*')
    this.headers.append('Access-Control-Request-Headers', 'Content-Type')
   }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


  /**
  * @desc function get service
  * @param string $path - the endpoint of the api
  * @param object $headers - header object of the service
  * @return promise - promise http
  */
  get(path: string, headers: any = this.headers): Observable<any> {
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
  post(obj: any, path: String, headers: any = this.headers): Observable<any> {
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
  put(obj:any, path: string, headers: any = this.headers): Observable<any> {
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
    delete(path: string, headers: any = this.headers): Observable<any> {
      return this.http.delete<any>(this.api_url + path, headers)
      .pipe(
        timeout(1000 * 20),
        catchError(this.handleError)
      )
    }

}