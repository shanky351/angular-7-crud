import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanConverter'
})
export class BooleanConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

}
