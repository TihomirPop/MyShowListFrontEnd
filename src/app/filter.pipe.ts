import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], field: string, value: string): any {
    if (!Array.isArray(array))
      return [];
    if (!field || !value)
      return array;

    const fields = field.split('.');

    return array.filter(element => {
      let fieldValue = element;
      for (const f of fields) {
        fieldValue = fieldValue[f];
        if (fieldValue === undefined) return false;
      }
      return fieldValue.toString().toLowerCase().includes(value.toLowerCase());
    });
  }


}
