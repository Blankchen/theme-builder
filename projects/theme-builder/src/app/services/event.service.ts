import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: { [key: string]: Subject<any> } = {};

  constructor() { }

  publish(event: string, value: any) {
    const eventSubject = this.getEvent(event);
    eventSubject.next(value);
  }

  event(event: string) {
    return this.getEvent(event);
  }

  private getEvent(event: string) {
    if (!this.eventList[event]) {
      this.eventList[event] = new Subject();
    }
    return this.eventList[event];
  }
}
