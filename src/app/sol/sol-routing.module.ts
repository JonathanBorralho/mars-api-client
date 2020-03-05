import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolListComponent } from './sol-list/sol-list.component';
import { SolDetailComponent } from './sol-detail/sol-detail.component';

const routes: Routes = [
  { path: 'sols', component: SolListComponent },
  { path: 'sols/:id', component: SolDetailComponent },
  { path: '', redirectTo: '/sols', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SolRoutingModule { }
