import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SolBloc } from '../bloc/sol.bloc';
import { SolService } from '../sol.service';
import { SolEvent } from '../bloc/sol.event';


@Component({
  selector: 'app-sol-list',
  templateUrl: './sol-list.component.html'
})
export class SolListComponent implements OnInit {
  faSpinner = faSpinner;
  solBloc: SolBloc;

  constructor(private solService: SolService) {
    this.solBloc = new SolBloc(solService);
  }

  ngOnInit(): void {
    this.fetchSols();
  }

  tryAgain() {
    this.fetchSols();
  }

  fetchSols() {
    this.solBloc.dispath(SolEvent.FETCH);
  }

}
