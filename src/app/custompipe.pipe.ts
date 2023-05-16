import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): any {
    const nvalue = String(value).split('').reverse().join('');
    return nvalue;
  }
}
