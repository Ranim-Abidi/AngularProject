import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l’équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 12,
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0,
    },
  ];

  getSuggestions(): Suggestion[] {
    return this.suggestions;
  }

  getSuggestionById(id: number): Suggestion | undefined {
    return this.suggestions.find((s) => s.id === id);
  }

  getNextId(): number {
    return this.suggestions.length
      ? Math.max(...this.suggestions.map((s) => s.id)) + 1
      : 1;
  }

  addSuggestion(suggestion: Suggestion): void {
    this.suggestions.push(suggestion);
  }
}

