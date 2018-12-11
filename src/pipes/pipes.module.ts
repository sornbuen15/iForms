import { NgModule } from '@angular/core';
import { SearchByCompanyPipe } from './search/searchbycompany';
import { SearchByNamePipe } from './search/searchbyname';
import { SortPipe } from './sort/sort';
import { GroupByPipe } from './group/group';
@NgModule({
	declarations: [
		SearchByCompanyPipe,
		SearchByNamePipe,
		SortPipe,
		GroupByPipe
	],
	imports: [],
	exports: [
		SearchByCompanyPipe,
		SearchByNamePipe,
		SortPipe,
		GroupByPipe
	]
})
export class PipesModule { }
