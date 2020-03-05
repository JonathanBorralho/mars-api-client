import { Component, OnInit } from '@angular/core';
import { Sol } from '../model/sol.model';

@Component({
  selector: 'app-sol-detail',
  templateUrl: './sol-detail.component.html',
  styleUrls: ['./sol-detail.component.css']
})
export class SolDetailComponent implements OnInit {

  sol: Sol;

  constructor() { }

  ngOnInit(): void {
    this.sol = history.state;
  }

}
