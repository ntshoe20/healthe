import { Injectable } from '@angular/core';
import { MessageService } from '../components/messages/message.service';
import { Observable, of } from 'rxjs';
import { Patient } from './patient';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private accessPointUrl: string = 'https://healthebackend20181014040029.azurewebsites.net/api/patients';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all patients*/
  public get(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getPatients', []))
      );
  }

  /** GET: Get patient by id*/
  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(this.accessPointUrl + '/' + id, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError<Patient>('getPatient'))
      );
  }

  /** PUT: */
  update(patient: Patient): Observable<any> {
    return this.http.put(this.accessPointUrl + '/' + patient.patientID, patient, httpOptions)
      .pipe(
        tap(_ => this.log(`updated patient id=${patient.patientID}`, true)),
        catchError(this.handleError<any>('updatePatient'))
      );
  }

  /** POST: */
  add(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.accessPointUrl, patient, httpOptions).pipe(
      tap((patient: Patient) => this.log(`added patient w/ id=${patient.patientID}`, true)),
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  /** DELETE: */
  delete(patient: Patient): Observable<any> {
    return this.http.post<any[]>(this.accessPointUrl + '/', patient.patientID, httpOptions).pipe(
      tap(_ => this.log(`deleted patients`, true)),
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`PatientService: ${message}`, isSuccess);
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
