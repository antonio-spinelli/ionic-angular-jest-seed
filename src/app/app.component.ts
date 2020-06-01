import { Component } from '@angular/core'
import { Plugins, StatusBarStyle, Capacitor } from '@capacitor/core'
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp()
  }

  private async initializeApp() {
    await this.platform.ready()

    if (Capacitor.isPluginAvailable('StatusBar')) {
      Plugins.StatusBar.setStyle({ style: StatusBarStyle.Dark })
    }
    if (Capacitor.isPluginAvailable('SplashScreen')) {
      Plugins.SplashScreen.hide()
    }
  }
}
