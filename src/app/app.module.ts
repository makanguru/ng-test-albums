import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumItemComponent } from './albums/album-item/album-item.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AlbumsComponent,
    AlbumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
