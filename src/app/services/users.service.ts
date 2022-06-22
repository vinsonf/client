import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$ = this.api.get<IUser[]>('users');;
  loggedInUser$: Observable<undefined | IUser> = of(undefined);
  constructor(
    private api: ApiService,
  ) {
   }
   getUser(id$: Observable<string|null>): Observable<IUser | undefined> {
    return this.users$.pipe(
       switchMap(users => id$.pipe(
         map(
           id => users.find(user => user.id == id)
         ))
       ));
   }

   login(username:string, password: string){

    this.loggedInUser$ = this.users$.pipe(
      map(users => users.find(user => user.username === username && user.name === password))
    )
    return this.loggedInUser$;
   }


  }
