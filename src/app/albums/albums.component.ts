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

  // console.log(this.albums)

//   id: "8"
//   title: "Velit ea magni fuga et natus id similique."
//   user_id: "2004"
//   _links:
//   edit: {href: "https://gorest.co.in/public-api/albums/8"}
//   self:
//   href: "https://gorest.co.in/public-api/albums/8"



}
