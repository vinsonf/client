import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUsersRoutingModule } from './page-users-routing.module';
import { PageUsersComponent } from './page-users.component';
import { DetailsUserComponent } from './details-user/details-user.component';


@NgModule({
  declarations: [
    PageUsersComponent,
    DetailsUserComponent
  ],
  imports: [
    CommonModule,
    PageUsersRoutingModule
  ]
})
export class PageUsersModule { }
