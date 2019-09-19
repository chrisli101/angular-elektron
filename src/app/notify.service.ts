import { Injectable } from '@angular/core';
import { Notification } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notification: typeof Notification;
  constructor() { 
    if (this.isElectron()) {
      this.notification = window.require('electron').remote.Notification;
    }
  }
  isElectron = () => {
    return window && window.process && window.process.type;
  }
}





// @Injectable()
// export class ElectronService {
//   notification: typeof Notification;

//   constructor() {
//     // Import from Electron API if we are in Electron
//     if (this.isElectron()) {
//       this.notification = window.require('electron').remote.Notification;
//     }
//   }

//   isElectron = () => {
//     return window && window.process && window.process.type;
//   }
// }