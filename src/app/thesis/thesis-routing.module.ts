
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'thesis', redirectTo: 'thesis/index', pathMatch: 'full'},
  { path: 'thesis/index', component: IndexComponent },
  { path: 'thesis/create', component: CreateComponent },
  { path: 'thesis/edit/:idThesis', component: EditComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThesisRoutingModule { }

