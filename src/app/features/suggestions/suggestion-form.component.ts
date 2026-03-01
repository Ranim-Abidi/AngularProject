import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionsService } from './suggestions.service';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent {

  suggestionForm!: FormGroup;

  // ✅ CORRECTION ICI
  today: Date = new Date();

  defaultStatus: string = 'en attente';

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre',
  ];

  constructor(
    private fb: FormBuilder,
    private suggestionsService: SuggestionsService,
    private router: Router
  ) {

    this.suggestionForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[A-Z][a-zA-Z]*$/)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(30)
        ]
      ],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.suggestionForm.invalid) {
      this.suggestionForm.markAllAsTouched();
      return;
    }

    const formValue = this.suggestionForm.value;

    const newSuggestion: Suggestion = {
      id: this.suggestionsService.getNextId(),
      title: formValue.title,
      description: formValue.description,
      category: formValue.category,
      date: this.today,
      status: this.defaultStatus,
      nbLikes: 0
    };

    this.suggestionsService.addSuggestion(newSuggestion);

    this.router.navigate(['/suggestions']);
  }
}