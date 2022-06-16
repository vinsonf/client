import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$;
  constructor(
    private api: ApiService,
  ) {
    this.users$ = this.api.get<any[]>('users');
   }
   getUser(id$: Observable<string|null>): Observable<any[]> {
    return this.users$.pipe(
       switchMap(users => id$.pipe(
         map(
           id => users.find(user => user.id == id)
         ))
       ));
   }


  }
