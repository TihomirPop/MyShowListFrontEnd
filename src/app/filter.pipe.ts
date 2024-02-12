import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], field: string, value: string): any {
    if(!Array.isArray(array))
      return [];
    if (!field || !value)
      return array;

    return array.filter(element => element[field].toString().toLowerCase().includes(value.toLowerCase()));
  }

}
