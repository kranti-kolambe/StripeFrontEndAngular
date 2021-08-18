import { Component, OnInit, TemplateRef } from '@angular/core';

import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}
 
  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: '1 Month',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 999,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        
        stripe.redirectToCheckout({
          sessionId: data.id,
          });

         
      //  console.log("Session Id "+data.id);
      //  console.log("Session amount "+data.amount);
      //  console.log("Session amount "+data.amount);
      //  console.log("Data body "+data.body);
      });
  }
}
