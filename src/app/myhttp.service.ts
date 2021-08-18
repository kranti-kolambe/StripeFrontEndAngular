import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {
  subscribe(arg0: (resp: any) => void) {
    throw new Error('Method not implemented.');
  }

  
  baseUrl:string="http://localhost:8081/api/";
  constructor(private http:HttpClient) { }
  // helloWorldService(){
  //   return(this.http.get('http://localhost:8081/api/basicauth'));
  // }
  loginCheck(obj){
   return(this.http.post('http://localhost:8081/api/loginCheck',obj));
   //return this.http.post('${this.baseUrl}loginCheck',obj);
   
  }
 addUser(empobj){
    
    return(this.http.post('http://localhost:8081/api/registerUser',empobj,{responseType:"text"}));
  }
  getPaymentDetail(parentdata){
    return (this.http.get(`${this.baseUrl}getPaymentDetail/${parentdata}`));
    //return (this.http.get('http://localhost:8080/api/getEmployeeById/'));
 }
 /*updateEmployee(empobj){
   return (this.http.put(`${this.baseUrl}updateEmployee`,empobj,{responseType:"text"}));
 }*/
 getAllSubscription(){
  return (this.http.get('http://localhost:8081/api/getAllSubscription'));
}
changeStatus(empobj){
  return (this.http.post(`${this.baseUrl}changeStatus`,empobj,{responseType:"text"}));
}
setPaymentDetail(paymetDetail){
  return (this.http.post(`${this.baseUrl}setPaymentDetail`,paymetDetail,{responseType:"text"}));
}
}