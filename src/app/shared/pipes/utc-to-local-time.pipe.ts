import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToLocalTime'
})
export class UtcToLocalTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  /*
   transform(value: any, args?: any): any {
    return value === '0001-01-01T08:00:00' ? '沒有結束時間' : super.transform(value, args);
  }*/

}
