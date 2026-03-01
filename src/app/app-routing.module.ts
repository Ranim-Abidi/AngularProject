import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

const routes: Routes = [
  // Route par défaut → /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // /home → HomeComponent
  { path: 'home', component: HomeComponent },

  // /listSuggestion → ListSuggestionComponent (atelier routage simple)
  { path: 'listSuggestion', component: ListSuggestionComponent },

  // /suggestions → module Suggestions (lazy)
  {
    path: 'suggestions',
    loadChildren: () =>
      import('./features/suggestions/suggestions.module').then(
        (m) => m.SuggestionsModule
      ),
  },

  // /users → module Users (lazy)
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
  },

  // Route wildcard → NotfoundComponent
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

