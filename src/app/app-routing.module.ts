import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './api-list/api-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'status' },
  { path: 'status', component: ApiListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
