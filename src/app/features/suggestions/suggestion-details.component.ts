import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../models/suggestion';
import { SuggestionsService } from './suggestions.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css'],
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion?: Suggestion;

  constructor(
    private route: ActivatedRoute,
    private suggestionsService: SuggestionsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestionsService.getSuggestionById(id);
  }
}

