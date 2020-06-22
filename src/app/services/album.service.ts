import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Album } from '../models/album';
import { ALBUMS } from '../mock-albums';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }


  getAlbums(): Observable<Album[]> {

    return of(ALBUMS);
  }


}
