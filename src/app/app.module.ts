import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavegationComponent } from './navegation/navegation.component';
import { AnalitycsComponent  } from './analitycs/analitycs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    AnalitycsComponent    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
