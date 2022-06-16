import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'albums', loadChildren: () => import('./pages/page-albums/page-albums.module').then(m => m.PageAlbumsModule)},
  {path: 'posts', loadChildren: () => import('./pages/page-posts/page-posts.module').then(m => m.PagePostsModule)},
  {path: 'comments', loadChildren: () => import('./pages/page-comments/page-comments.module').then(m => m.PageCommentsModule)},
  {path: 'photos', loadChildren: () => import('./pages/page-photos/page-photos.module').then(m => m.PagePhotosModule)},
  {path: 'todos', loadChildren: () => import('./pages/page-todos/page-todos.module').then(m => m.PageTodosModule)},
  {path: 'users', loadChildren: () => import('./pages/page-users/page-users.module').then(m => m.PageUsersModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
