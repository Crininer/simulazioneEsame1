import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BigListComponent } from './big-list/big-list.component';
import { BigListElementComponent } from './big-list-element/big-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BigListComponent,
    BigListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
