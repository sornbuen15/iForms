import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchbycompany',
})
export class SearchByCompanyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchResultCompany: string): any[] {
    if (!items) return [];
    if (!searchResultCompany) return items;
    console.log("transform item: "+JSON.stringify(items))
    searchResultCompany = searchResultCompany.toLowerCase();
    return items.filter(it => {
      return it.key.toLowerCase().includes(searchResultCompany); // only filter country name
    });
  }
}
