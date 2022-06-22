import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercased'
})
export class UppercasedPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if (!args[0]){
      return value.toUpperCase();
    }
    return value.slice(0, args[0]).toUpperCase() + value.slice(args[0]).toLowerCase();
  }

}
