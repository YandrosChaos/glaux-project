import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (true) {
        console.log("hello there")
        App.exitApp();
      }
    });
  }
}
