import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../components/messages/message.service';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Allergy } from './allergy';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private accessPointUrl: string = 'https://healthebackend20181014040029.azurewebsites.net/api/allergies';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET: Get all allergys*/
  public get(): Observable<Allergy[]> {
    return this.http.get<Allergy[]>(this.accessPointUrl, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError('getAllergies', []))
      );
  }

  /** GET: Get allergy by id*/
  getAllergy(id: string): Observable<Allergy> {
    return this.http.get<Allergy>(this.accessPointUrl + '/' + id, httpOptions)
      .pipe(
        tap(),
        catchError(this.handleError<Allergy>('getAllergy'))
      );
  }

  /** PUT: */
  update(allergy: Allergy): Observable<any> {
    return this.http.put(this.accessPointUrl + '/' + allergy.allergyID, allergy, httpOptions)
      .pipe(
        tap(_ => this.log(`updated allergy id=${allergy.allergyID}`, true)),
        catchError(this.handleError<any>('updateAllergy'))
      );
  }

  /** POST: */
  add(allergy: Allergy): Observable<Allergy> {
    return this.http.post<Allergy>(this.accessPointUrl, allergy, httpOptions).pipe(
      tap((allergy: Allergy) => this.log(`added allergy w/ id=${allergy.allergyID}`, true)),
      catchError(this.handleError<Allergy>('addAllergy'))
    );
  }

  /** DELETE: */
  delete(allergy: Allergy): Observable<any> {
    return this.http.post<any[]>(this.accessPointUrl + '/', allergy.allergyID, httpOptions).pipe(
      tap(_ => this.log(`deleted allergys`, true)),
      catchError(this.handleError<Allergy>('deleteAllergy'))
    );
  }

  /******************** Private Helpers ********************/
  private log(message: string, isSuccess: boolean) {
    this.messageService.add(`AllergyService: ${message}`, isSuccess);
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
