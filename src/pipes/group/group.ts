import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(value: any, groupByKey: string) {
    const company: any[] = [];
    const groupedElements: any = {};
    console.log('value' + JSON.stringify(value));
    if (isEmpty(value)) {
      return [];
    }

    value.forEach((obj: any) => {
      if (!(obj[groupByKey] in groupedElements)) {
        groupedElements[obj[groupByKey]] = [];
      }
      groupedElements[obj[groupByKey]].push(obj);
    });

    for (let prop in groupedElements) {
      if (groupedElements.hasOwnProperty(prop)) {
        company.push({
          key: prop,
          list: groupedElements[prop]
        });
      }
    }
    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }
    return company;
  }
}