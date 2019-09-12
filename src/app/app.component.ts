import { Component } from '@angular/core';
import { Observable} from 'rxjs';

import { ElectronService2 } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { ClientworklistComponent } from './clientworklist/clientworklist.component';
import { PushNotificationsService} from 'ng-push';
import { Push } from 'push-js';
import { ElectronService } from 'ngx-electron';
import { NotifyService } from './notify.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public electronService: ElectronService2,
    private translate: TranslateService,
    private _pushNotifications: PushNotificationsService,
    public _electronService: ElectronService
  ) {
    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this._pushNotifications.requestPermission();

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
      setInterval(() => {
        this.notify2();
    }, 50000);
      this._electronService.ipcRenderer.send('request-mainprocess-action', "Message");
      this._electronService.ipcRenderer.send('test-action', "Message");
      
    } else {
      console.log('Mode web');
    }
  }
  ngOnInit(): void {
   
    this._electronService.ipcRenderer.on('message', (event, messages) => { alert(messages);
    })



    //renderer.js
// ipc.on('fromMain', (event, messages) => {
//   // do something
//  }
// }

 

 

}

notify2() {
  this._electronService.ipcRenderer.send('test-action', "Message");
}
notify() {
  this._electronService.ipcRenderer.send('test-action-click', "Message");
}
}
