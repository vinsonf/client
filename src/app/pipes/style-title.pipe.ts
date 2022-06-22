import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styleTitle'
})
export class StyleTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return {
      color: 'red'
    }
  }

}
