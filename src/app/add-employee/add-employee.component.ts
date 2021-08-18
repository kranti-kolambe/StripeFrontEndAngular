import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './../myhttp.service';
import { Router } from '@angular/router';
//import { Console } from 'console';
import { EncrDecrServiceService } from '../encr-decr-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  allSubscription=[];
  backendResponse:string='';
  constructor(private service:MyhttpService,
              private router:Router,
              private EncrDecr: EncrDecrServiceService) { }

  ngOnInit() {
    this.GetAllSubscription();
    console.log(this.allSubscription);
  }

  GetAllSubscription(){
      this.service.getAllSubscription()
      .subscribe((response)=>{
          console.log(response);
          
          this.allSubscription=(<any>response);
        
      })
      
  }
  onSubmit(f){
    let empobj={
      fname:f.value.fname,
      lname:f.value.lname,
      address:f.value.address,
      birthdate:f.value.birthdate,
      
      email:f.value.email,
      password:this.EncrDecr.set('123456$#@$^@1ERF', f.value.password),
      subscription:f.value.subscription
      
    };
    console.log(empobj);
    this.service.addUser(empobj)
    .subscribe((response)=>{
      
      console.log(response);
      this.backendResponse=response;
      this.router.navigate(['/login']);
    });
    console.log(empobj);
  }
}
