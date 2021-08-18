import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';
import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';
//import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SubscribePaymentComponent } from './subscribe-payment/subscribe-payment.component';
import { SucessPaymentComponent } from './sucess-payment/sucess-payment.component';
//import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';


const routes: Routes = [
  {
    path:'',redirectTo:"/login",pathMatch:"full"
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'home', component: HomeComponent, canActivate:[AuthGuard]
  },
  {
    path:'addEmployee', component: AddEmployeeComponent
  },
  {
    path:'subscribePayment', component: SubscribePaymentComponent, canActivate:[AuthGuard]
  },
  { path: 'cancel', component: CancelPaymentComponent, canActivate:[AuthGuard]},
  { path: 'success', component: SucessPaymentComponent, canActivate:[AuthGuard]},
  /*{
    path:'getEmployeeById/:id',component:EmployeeDetailsComponent, canActivate:[AuthGuard]
  },
  {
    path:'updateEmployee',component:UpdateemployeeComponent, canActivate:[AuthGuard]
  },*/
  {
    path:'**',component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
