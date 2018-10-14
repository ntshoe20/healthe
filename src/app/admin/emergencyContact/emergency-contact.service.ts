import { Injectable } from '@angular/core';
import { MessageService } from '../components/messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmergencyContact } from './emergency-contact';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmergencyContactService {

  private accessPointUrl: string = 'https://healthebackend20181014040029.azurewebsites.net/api/emergencyContacts';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all emergencyContacts*/
  public get(): Observable<EmergencyContact[]> {
    return this.http.get<EmergencyContact[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getEmergencyContacts', []))
      );
  }

  /** GET: Get emergencyContact by id*/
  getEmergencyContact(id: string): Observable<EmergencyContact> {
    return this.http.get<EmergencyContact>(this.accessPointUrl + '/' + id, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError<EmergencyContact>('getEmergencyContact'))
      );
  }

  /** PUT: */
  update(emergencyContact: EmergencyContact): Observable<any> {
    return this.http.put(this.accessPointUrl + '/' + emergencyContact.emergencyContactId, emergencyContact, httpOptions)
      .pipe(
        tap(_ => this.log(`updated emergencyContact id=${emergencyContact.emergencyContactId}`, true)),
        catchError(this.handleError<any>('updateEmergencyContact'))
      );
  }

  /** POST: */
  add(emergencyContact: EmergencyContact): Observable<EmergencyContact> {
    return this.http.post<EmergencyContact>(this.accessPointUrl, emergencyContact, httpOptions).pipe(
      tap((emergencyContact: EmergencyContact) => this.log(`added emergencyContact w/ id=${emergencyContact.emergencyContactId}`, true)),
      catchError(this.handleError<EmergencyContact>('addEmergencyContact'))
    );
  }

  /** DELETE: */
  delete(emergencyContact: EmergencyContact): Observable<any> {
    return this.http.post<any[]>(this.accessPointUrl + '/', emergencyContact.emergencyContactId, httpOptions).pipe(
      tap(_ => this.log(`deleted emergencyContacts`, true)),
      catchError(this.handleError<EmergencyContact>('deleteEmergencyContact'))
    );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`EmergencyContactService: ${message}`, isSuccess);
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
