import { Component, OnInit } from '@angular/core';

import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => this.albums = albums['result'] );
  }

}
