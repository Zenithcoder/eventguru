import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reserve } from '../_models/reserve';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'events');
  }

  getEvent(id): Observable<Event> {
    return this.http.get<Event>(this.baseUrl + 'event/' + id);
  }

  registerForEvent(reserve: Reserve) {
    return this.http.post(this.baseUrl + 'register_for_event', reserve);
  }

  createEvent(event: any) {
    console.log(event);
    return this.http.post(this.baseUrl + 'create_event', event);
  }

  creatorEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'myevents');
  }

  getCreatorEvent(id): Observable<Event> {
    return this.http.get<Event>(this.baseUrl + 'creator_event/' + id);
  }

}
