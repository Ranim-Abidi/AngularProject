import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsListComponent } from './suggestions-list.component';
import { SuggestionDetailsComponent } from './suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form.component';

const routes: Routes = [
  { path: '', component: SuggestionsListComponent },
  { path: 'new', component: SuggestionFormComponent },
  { path: ':id', component: SuggestionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionsRoutingModule {}

