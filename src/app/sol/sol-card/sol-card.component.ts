import { Component, Input } from '@angular/core';
import { Sol } from '../model/sol.model';

@Component({
  selector: 'app-sol-card',
  templateUrl: './sol-card.component.html'
})
export class SolCardComponent {

  @Input() sol: Sol;
}
