import { Component,TemplateRef, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  modalRef: BsModalRef;
  eventForm: FormGroup;

  loading: boolean = false;

  @ViewChild('fileInput',{static:true}) fileInput: ElementRef;

  constructor(private modalService: BsModalService, private userService: UserService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder) {}
 
  ngOnInit() {
      this.createEventForm();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
  createEventForm() {
    this.eventForm = this.fb.group({
      event_name: ['', Validators.required],
      event_description: ['', Validators.required],
      total_number_of_attendee: ['', Validators.required],
      event_venue: ['', Validators.required],
      event_startdate: ['', Validators.required],
      event_enddate: ['', Validators.required],
      registration_closing_date: ['', Validators.required],
      free_or_paid_event: ['', Validators.required],
      banner: ['', Validators.required]
    });
  }

  register() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.get('banner').value, this.eventForm.value);
      const formModel = this.prepareSave();
      this.loading = true;
      // In a real-world app you'd have a http request / service call here like
      // this.http.post('apiUrl', formModel)
    //  this.user = Object.assign({}, this.registerForm.value);
      this.userService.createEvent(formModel).subscribe((res) => {
        this.alertify.success('Registration successful');
        console.log(res);
        setTimeout(() => {
          // FormData cannot be inspected (see "Key difference"), hence no need to log it here
          alert('done!');
          this.loading = false;
        }, 1000);

        console.log(1);
      }, error => {
        this.alertify.error(error);
      }, () => {
         
      });
    } 
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.eventForm.get('banner').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('event_name', this.eventForm.get('event_name').value);
    input.append('banner', this.eventForm.get('banner').value);
    input.append('event_description', this.eventForm.get('event_description').value);
    input.append('total_number_of_attendee', this.eventForm.get('total_number_of_attendee').value);
    input.append('event_venue', this.eventForm.get('event_venue').value);
    input.append('event_startdate', this.eventForm.get('event_startdate').value);
    input.append('event_enddate', this.eventForm.get('event_enddate').value);
    input.append('registration_closing_date', this.eventForm.get('registration_closing_date').value);
    input.append('free_or_paid_event', this.eventForm.get('free_or_paid_event').value);
    return input;
  }

  /*onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
    }, 1000);
  }*/

  clearFile() {
    this.eventForm.get('banner').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}

