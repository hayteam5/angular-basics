import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Style2Directive } from './directives/style2.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import {MultByPipe} from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Style2Directive,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
