import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsComponent } from './albums.component';
import { AlbumRoutingModule } from './album-routing.module';


@NgModule({
  declarations: [ AlbumsComponent ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumsModule { }
