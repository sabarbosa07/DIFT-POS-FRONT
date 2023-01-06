import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '@core/models/auth/loginDto.model';
import { LoginResponse } from '@core/models/auth/loginResponse.model';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public httpOptions = {};
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "cache-control": "no-cache",
        // Authorization: "Bearer " + this.authService.GetAccessToken(),
      }),
    };
  }

  login$(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/auth/login`, loginDto);
  }

  // private handleError(err: any) {
  //   console.log("handleError ***", err);
  //   let errorMessage: string;
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${JSON.stringify(
  //       (err.error && err.error.Message) || err.message
  //     )}`;
  //   } else {
  //     // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
  //     errorMessage = `Backend returned error: ${JSON.stringify(
  //       (err.error && err.error.Message) || err.message
  //     )}`;
  //   }
  //   return throwError(() => new Error(errorMessage));
  // }
}
