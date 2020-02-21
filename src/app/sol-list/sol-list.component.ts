import { Component, OnInit } from '@angular/core';
import { Sol } from '../model/sol.model';
import { SolService } from '../sol.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sol-list',
  templateUrl: './sol-list.component.html'
})
export class SolListComponent implements OnInit {
  hasError = false;
  faSpinner = faSpinner;
  sols$: Observable<Sol[]>;

  constructor(private solService: SolService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.sols$ = this.solService.getSols().pipe(
      catchError((_) => {
        this.hasError = true;
        this.toastr.error('There was an error!');
        return from([]);
      })
    );
  }

}
