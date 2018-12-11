import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchbyname',
})
export class SearchByNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchResultName: string): any[] {
    if (!items) return [];
    if (!searchResultName) return items;
    console.log("transform item: "+JSON.stringify(items))
    searchResultName = searchResultName.toLowerCase();
    return items.filter(it => {
      return it.firstname.toLowerCase().includes(searchResultName); // only filter country name
    });
  }
}
