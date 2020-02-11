import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Event} from '../../_models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  id:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

   this.route.data.subscribe(data => {
      this.event = data['event'].event;
      this.id = data['event'].event.id;
      console.log(this.event);
    });

}
}
