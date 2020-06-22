import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseUrl = environment.baseUrl;
  private albumsUrl = this.baseUrl + '/albums';
  private suffixToken = environment.suffixToken;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumsUrl}?${this.suffixToken}`)
    .pipe(catchError(this.handleError<Album[]>('getAlbums', [])));
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}?${this.suffixToken}`;
    return this.http.get<Album>(url).pipe(
      catchError(this.handleError<Album>(`getAlbum id=${id}` ))
    )
  }
}
