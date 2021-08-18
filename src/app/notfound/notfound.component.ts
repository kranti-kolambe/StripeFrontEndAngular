import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router:Router) { }
  hrefUrl:string="";
  ngOnInit() {
    //this.hrefUrl=this.router.url;
    this.hrefUrl=window.location.href;
  }

}
