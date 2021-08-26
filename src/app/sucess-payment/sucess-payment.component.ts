import { Component, Input, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';
import { PaymentDetails } from '../payment-detail';

@Component({
  selector: 'app-sucess-payment',
  templateUrl: './sucess-payment.component.html',
  styleUrls: ['./sucess-payment.component.css']
})
export class SucessPaymentComponent implements OnInit {
  //fname:string='';
  email:string='';
  resp:any;
 
  constructor(private service:MyhttpService) { }
  onCancelSubscription(){
    this.service.changeStatus(this.email)
    .subscribe((response)=>{
      this.resp=(<any>response);
      console.log(this.resp);
    });
  }
  onResumeSubscription(){
    this.service.changeStatus(this.email)
    .subscribe((response)=>{
      this.resp=(<any>response);
      console.log(this.resp);
    });
  }
  ngOnInit(){
    //this.fname=sessionStorage.getItem("fname");
    this.email=sessionStorage.getItem("email");
    console.log("Email "+this.email);
    let paymetDetails:PaymentDetails={
          productName:'1 Month',
          customerEmailId:this.email,      
          paidAmount:999.00,
          quantity:1,
          paymentStatus:'Paid',
          paymentDate:Date.now(),
      }
      console.log("Payment details "+paymetDetails.customerEmailId);
      console.log("Payment details "+paymetDetails.paidAmount);
      console.log("Payment details "+paymetDetails.paymentDate);
      console.log("Payment details "+paymetDetails.productName);
      console.log("Payment details "+paymetDetails.quantity);
      console.log("Payment details "+paymetDetails.paymentStatus);
    this.SetPaymentDetail(paymetDetails);
  } 
 
  SetPaymentDetail(paymetDetails){
    this.service.setPaymentDetail(paymetDetails).subscribe((response)=>{
       this.resp=(<any>response);
       console.log(this.resp);
    });
    
  }
  
}
