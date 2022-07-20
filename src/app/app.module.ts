import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Style2Directive } from './directives/style2.directive';
import { IfnotDirective } from './directives/ifnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    Style2Directive,
    IfnotDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
