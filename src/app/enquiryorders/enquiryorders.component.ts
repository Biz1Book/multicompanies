import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-enquiryorders',
  templateUrl: './enquiryorders.component.html',
  styleUrls: ['./enquiryorders.component.css']
})
export class EnquiryordersComponent implements OnInit {

  Stores:any=[];
  storeId:any;
  constructor(private Auth: AuthService)
   { 
this.getAllStores();
   }

   getAllStores()
   {
    this.Auth.getAllstores().subscribe((data: any) => {
     console.log("store",data)
     this.Stores=data;
    });
   }


  ngOnInit(): void {
  }

}
