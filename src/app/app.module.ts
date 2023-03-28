import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewEmpComponent } from './view-emp/view-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent,
    AddEmpComponent,
    UpdateComponent,
    ViewEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTableModule,MatFormFieldModule,ReactiveFormsModule,HttpClientModule,
    MatDialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
