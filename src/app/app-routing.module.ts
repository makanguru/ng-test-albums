import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumItemComponent } from './albums/album-item/album-item.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id', component: UserItemComponent},
  { path: 'albums', component: AlbumsComponent},
  // {
  //   path: 'albums',
  //   loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
  // },
  { path: 'album/:id', component: AlbumItemComponent}
];


  //{ path: 'albums', component: AlbumsComponent},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
