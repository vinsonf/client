import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Pipe({
  name: 'userById'
})
export class UserByIdPipe implements PipeTransform {
  constructor(
    private usersService: UsersService,
  ){}
  transform(value: string, ...args: unknown[]): Observable<IUser> {
    return this.usersService.users$.pipe(
      map((users) => users.find(user => user.username === value) as IUser)
    );
  }

}
