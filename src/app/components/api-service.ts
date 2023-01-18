import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { ErrorTracker } from "./version1/models/errorTracker";

@Injectable()
export class ApiService {
    baseUrl: string;
    options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(private http: HttpClient) {
        this.baseUrl = '';
        this.setProfile('development');
    }

    setProfile(profile: string) {
        if (profile === 'development') {
            this.baseUrl = 'https://dev-manager-api.ecashcloud.com/api';
        }
    }

    get(path: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${path}`, this.options)
            .pipe(catchError(err => this.handleHttpError(err)));
    }


    private handleHttpError(error: HttpErrorResponse): Observable<ErrorTracker> {
        let dataError = new ErrorTracker()
        dataError.errorNumber = 100
        dataError.message = error.statusText
        dataError.friendlyMessage = 'An error occurred retriving data'
        return throwError(dataError)
    }

    post(path: string, body: Object = {}): Observable<any> {
        let url = `${this.baseUrl}/${path}`;

        return this.http.post(url, body, this.options)
            .pipe(catchError(this.handleError));
    }

    patch(path: string, body: Object = {}): Observable<any> {
        return this.http.patch(`${this.baseUrl}/${path}`, body, this.options)
            .pipe(catchError(this.handleError));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${path}`, this.options)
            .pipe(catchError(this.handleError));
    }

    handleError(error: any) {
        return throwError(error.error);
    }
}
