import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThesisModule } from './thesis/thesis.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './thesis/index/index.component';
import { CreateComponent } from './thesis/create/create.component';
import { EditComponent } from './thesis/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    //IndexComponent,
    //CreateComponent,
    //EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ThesisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
