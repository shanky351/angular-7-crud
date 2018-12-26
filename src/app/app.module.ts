import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// angular material modules
import { MatButtonModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatTableModule,
         MatInputModule,
         MatSortModule,
         MatIconModule,
         MatCardModule,
         MatDialogModule,
         MatPaginatorModule } from '@angular/material';
// /angular material modules

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { UsersComponent, DialogContentComponent } from './users/users.component';
import { BooleanConverterPipe } from '../common/boolean-converter.pipe';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserOperationService } from '../common/user-operation.service';
import { GlobalFunctionsService } from '../common/global-functions.service';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BooleanConverterPipe,
    CreateUserComponent,
    DialogContentComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [],
  providers: [UserOperationService, GlobalFunctionsService],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule { }
