import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse',
})
export class InversePipe implements PipeTransform {
  transform(value: string): string {
    let res = value.split('').reverse().join('');
    return res;
  }
}
