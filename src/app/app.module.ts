import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponentComponent } from '../parent-component/parent-component.component';
import { SharedComponentComponent } from '../shared/shared-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    SharedComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
