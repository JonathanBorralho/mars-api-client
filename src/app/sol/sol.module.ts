import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolService } from './sol.service';
import { SolCardComponent } from './sol-card/sol-card.component';
import { SolDetailComponent } from './sol-detail/sol-detail.component';
import { SolListComponent } from './sol-list/sol-list.component';
import { SolRoutingModule } from './sol-routing.module';

@NgModule({
  declarations: [
    SolCardComponent,
    SolDetailComponent,
    SolListComponent
  ],
  imports: [
    CommonModule,
    SolRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    SolService
  ]
})
export class SolModule { }
