import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Reserve } from 'src/app/_models/reserve';
import {Event} from '../../_models/event';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  event: Event;
  qty:number ;
  reserve: Reserve = {};

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute,private router: Router) { 
    this.qty = 1;
  }

  ngOnInit() {
   this.route.data.subscribe(data => {
      this.event = data['event'].event;
      console.log(this.event);
    });

}

  // increment product qty
  incrementQty() {
  console.log(this.qty+1);
  this.qty += 1;

  }

  // decrement product qty
  decrementQty() {
  if(this.qty -1 < 1 ){
  this.qty = 1
  //console.log(this.qty);
  }else{
  this.qty -= 1;
 // console.log(this.qty);
  }
  }

  reserveEvent(){
    
    this.reserve.number_of_ticket = this.qty;
    this.reserve.event_id = this.route.snapshot.paramMap.get('id');
    this.userService.registerForEvent(this.reserve)
      .subscribe((res) => {
        this.alertify.success('successful');
        this.router.navigate(['/success']);
        console.log(res);
      }, error => {
        this.alertify.error(error);
     //   this.router.navigate(['/home']);
      });

      console.log(this.reserve);

  }

}
