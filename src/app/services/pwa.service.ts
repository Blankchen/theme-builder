import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(
    private appRef: ApplicationRef,
    private updates: SwUpdate,
  ) { }

  checkForUpdates() {
    console.log('checkUpdate');
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
