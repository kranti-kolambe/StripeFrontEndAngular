import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EncrDecrServiceService } from '../app/encr-decr-service.service' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { NotfoundComponent } from './notfound/notfound.component';
//import { HttpModule } from "@angular/common/http";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';
import { SucessPaymentComponent } from './sucess-payment/sucess-payment.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddEmployeeComponent,
    
    NotfoundComponent,
    FilterPipe,
    
    CancelPaymentComponent,
    SucessPaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule,   //for animation 
    HttpClientModule,  //
    //HttpModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,  //for paginatio
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })

  ],
  providers: [EncrDecrServiceService],
  entryComponents:[MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
