import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AlbumService } from '../../services/album.service';
import { User} from '../../models/user';
import { Album } from '../../models/album';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  user: User;
  albums: Album[];

  displayedColumns: string[] = ['id', 'title'];
  dataSource: Album[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe( user => {
        this.user = user['result'];
        this.getAlbums(this.user.id);
      });
  }

  getAlbums(userid): void {
    this.albumService.getAlbumsOfUser(userid)
      .subscribe(albums => {
        this.albums = albums['result'];
        this.dataSource = this.albums;
      });
  }



}
