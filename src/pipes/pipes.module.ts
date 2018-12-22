import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
import { GroupByPipe } from './group/group';
@NgModule({
	declarations: [
		SearchPipe,
		SortPipe,
		GroupByPipe
	],
	imports: [],
	exports: [
		SearchPipe,
		SortPipe,
		GroupByPipe
	]
})
export class PipesModule { }
