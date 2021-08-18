import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:string='';

  constructor(private Routes:Router) { }

  ngOnInit() {
    this.email=sessionStorage.getItem("email");
    
  }
  onLogout(){
    sessionStorage.removeItem("email");
    sessionStorage.clear();
    this.Routes.navigate(["/login"]);

  }

}
