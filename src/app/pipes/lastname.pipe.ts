import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Pipe({
  name: 'lastname'
})
export class LastnamePipe implements PipeTransform {

  transform(value: IUser|undefined|null, ...args: unknown[]): string {
    console.log(value, args)
    return value ? value.name.split(' ').slice(1).join('') : '';
  }

}
