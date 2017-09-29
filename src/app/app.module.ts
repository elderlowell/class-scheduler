import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCardModule, MdToolbarModule, MdExpansionModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    MenuBarComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdToolbarModule,
    MdExpansionModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
