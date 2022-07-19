import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThesisRoutingModule } from './thesis-routing.module';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ThesisRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})


export class ThesisModule { }