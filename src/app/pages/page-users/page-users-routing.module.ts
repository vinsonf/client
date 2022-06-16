import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user/details-user.component';
import { PageUsersComponent } from './page-users.component';

const routes: Routes = [
  {path: '', component: PageUsersComponent},
  {path: 'details/:id', component: DetailsUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUsersRoutingModule { }
