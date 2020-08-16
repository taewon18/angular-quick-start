import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Sampel1Component } from './sampel1/sampel1.component';
import { Sampel2Component } from './sampel2/sampel2.component';
import { Sampel3Component } from './sampel3/sampel3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Sampel1Component,
    Sampel2Component,
    Sampel3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
