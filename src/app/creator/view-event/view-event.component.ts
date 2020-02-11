import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from '../../_models/event';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  event: any;
  attendees: any;
  speakers:any;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
       this.event = data['event'];
       this.attendees = data['event'].event_attendees;
       this.speakers = data['event'].event_speakers;
       console.log(this.event);
     });
 }

}
