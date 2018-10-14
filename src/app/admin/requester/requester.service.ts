import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../components/messages/message.service';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Requester } from './requester';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private accessPointUrl: string = 'https://healthebackend20181014040029.azurewebsites.net/api/requesters';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all requesters*/
  public get(): Observable<Requester[]> {
    return this.http.get<Requester[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getRequesters', []))
      );
  }

  /** GET: Get requester by id*/
  getRequester(id: string): Observable<Requester> {
    return this.http.get<Requester>(this.accessPointUrl + '/' + id, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError<Requester>('getRequester'))
      );
  }

  /** PUT: */
  update(requester: Requester): Observable<any> {
    return this.http.put(this.accessPointUrl + '/' + requester.requesterID, requester, httpOptions)
      .pipe(
        tap(_ => this.log(`updated requester id=${requester.requesterID}`, true)),
        catchError(this.handleError<any>('updateRequester'))
      );
  }

  /** POST: */
  add(requester: Requester): Observable<Requester> {
    return this.http.post<Requester>(this.accessPointUrl, requester, httpOptions).pipe(
      tap((requester: Requester) => this.log(`added requester w/ id=${requester.requesterID}`, true)),
      catchError(this.handleError<Requester>('addRequester'))
    );
  }

  /** DELETE: */
  delete(requester: Requester): Observable<any> {
    return this.http.post<any[]>(this.accessPointUrl + '/', requester.requesterID, httpOptions).pipe(
      tap(_ => this.log(`deleted requesters`, true)),
      catchError(this.handleError<Requester>('deleteRequester'))
    );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`RequesterService: ${message}`, isSuccess);
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
