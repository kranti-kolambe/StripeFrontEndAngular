import { Component, Input, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';
import { PaymentDetail } from '../payment-detail';

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
  
  ngOnInit(){
    //this.fname=sessionStorage.getItem("fname");
    this.email=sessionStorage.getItem("email");
    console.log("Email "+this.email);
    let paymetDetail:PaymentDetail={
          productName:'1 Month',
          customerEmailId:this.email,      
          paidAmount:999.00,
      
          quantity:1,
      
          paymentStatus:'Paid',
      
         paymentDate:Date.now(),
      }
    this.SetPaymentDetail(paymetDetail);
  } 
 
  SetPaymentDetail(paymetDetail){
    this.service.setPaymentDetail(paymetDetail).subscribe((response)=>{
       this.resp=(<any>response);
       console.log(this.resp);
    });
    
  }
  
}
