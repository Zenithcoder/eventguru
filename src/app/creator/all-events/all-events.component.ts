import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events: Event[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.events = data['events'].myevents;
      console.log(this.events);
    });
  }

}
