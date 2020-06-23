import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(id)
      .subscribe( album => {
        this.album = album['result'];
      });
  }



}
