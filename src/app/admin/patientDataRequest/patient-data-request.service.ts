import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../components/messages/message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { PatientDataRequest } from './patient-data-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientDataRequestService {

  private accessPointUrl: string = 'https://healthebackend20181014040029.azurewebsites.net/api/patientDataRequests';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all patientDataRequests*/
  public get(): Observable<PatientDataRequest[]> {
    return this.http.get<PatientDataRequest[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getPatientDataRequests', []))
      );
  }

  /** GET: Get patientDataRequest by id*/
  getPatientDataRequest(id: string): Observable<PatientDataRequest> {
    return this.http.get<PatientDataRequest>(this.accessPointUrl + '/' + id, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError<PatientDataRequest>('getPatientDataRequest'))
      );
  }

  /** PUT: */
  update(patientDataRequest: PatientDataRequest): Observable<any> {
    return this.http.put(this.accessPointUrl + '/' + patientDataRequest.patientDataRequestID, patientDataRequest, httpOptions)
      .pipe(
        tap(_ => this.log(`updated patientDataRequest id=${patientDataRequest.patientDataRequestID}`, true)),
        catchError(this.handleError<any>('updatePatientDataRequest'))
      );
  }

  /** POST: */
  add(patientDataRequest: PatientDataRequest): Observable<PatientDataRequest> {
    return this.http.post<PatientDataRequest>(this.accessPointUrl, patientDataRequest, httpOptions).pipe(
      tap((patientDataRequest: PatientDataRequest) => this.log(`added patientDataRequest w/ id=${patientDataRequest.patientDataRequestID}`, true)),
      catchError(this.handleError<PatientDataRequest>('addPatientDataRequest'))
    );
  }

  /** DELETE: */
  delete(patientDataRequest: PatientDataRequest): Observable<any> {
    return this.http.post<any[]>(this.accessPointUrl + '/', patientDataRequest.patientDataRequestID, httpOptions).pipe(
      tap(_ => this.log(`deleted patientDataRequests`, true)),
      catchError(this.handleError<PatientDataRequest>('deletePatientDataRequest'))
    );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`PatientDataRequestService: ${message}`, isSuccess);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, false);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
