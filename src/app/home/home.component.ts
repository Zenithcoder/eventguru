import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../_models/event';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.events = data['events'].events;
      console.log(this.events);
    });

    $(window).scroll(function() {
      // 100 = The point you would like to fade the nav in.

      if ($(window).scrollTop() > 100) {

          $('.fixed').addClass('is-sticky');

      } else {

          $('.fixed').removeClass('is-sticky');

      };
  });
 }

}
