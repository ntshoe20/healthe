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

  private accessPointUrl: string = 'https://localhost:44314/api/leads';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all leads*/
  public get(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getPatients', []))
      );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`LeadService: ${message}`, isSuccess);
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
