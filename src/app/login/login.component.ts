import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {

  constructor(private route:Router) { }
  
  name:any;
  password:any;


  ngOnInit(): void {

  }
  nextpage(){
    const queryParams = { param1:this.name , param2:this.password, };  
    this.route.navigate(['/home'],{queryParams})
   
  }
}
