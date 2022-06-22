import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

}
