import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intPercent'
})
export class IntPercentPipe implements PipeTransform {

  transform(value: number): string {
    const numberString = String(value)
    const number = numberString[0] + numberString[2]
    return number + '%'
  }

}
