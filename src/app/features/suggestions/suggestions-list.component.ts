import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { SuggestionsService } from './suggestions.service';

@Component({
  selector: 'app-suggestions-list',
  templateUrl: './suggestions-list.component.html',
  styleUrls: ['./suggestions-list.component.css'],
})
export class SuggestionsListComponent {
  searchText = '';

  favorites: Suggestion[] = [];

  suggestions: Suggestion[];

  constructor(private suggestionsService: SuggestionsService) {
    this.suggestions = this.suggestionsService.getSuggestions();
  }

  like(s: Suggestion) {
    s.nbLikes++;
  }

  likeSuggestion(s: Suggestion) {
    this.like(s);
  }

  addToFavorites(s: Suggestion) {
    const alreadyInFavorites = this.favorites.some((f) => f.id === s.id);
    if (!alreadyInFavorites) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions() {
    return this.suggestions.filter((s) =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

