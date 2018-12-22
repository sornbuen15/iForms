import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchResult: string): any[] {
    if (!items) return [];
    if (!searchResult) return items;
    searchResult = searchResult.toLowerCase() ;

    return items.filter(item => {
      return item.fullname.toLowerCase().includes(searchResult) 
      || item.organization.toLowerCase().includes(searchResult)　|| item.table_no.toLowerCase().includes(searchResult)  ;  // only filter country name
    });
  }
}
