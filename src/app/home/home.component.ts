import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {
  @Input ()formData: any;
  constructor(private route:ActivatedRoute) {
    
  } 
  nameToDisplay:any;
  passwordToDisplay:any;


  ngOnInit(): void {
    console.log (this.formData)
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.nameToDisplay = params.param1;
      this.passwordToDisplay = params.param2;
    })
  }

}
