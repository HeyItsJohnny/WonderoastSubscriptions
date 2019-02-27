import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public loginPages = [
    {
      title: 'Home',
      url: '/wanderoast-home',
      icon: 'home'
    },
    {
      title: 'Products',
      url: '/product-list',
      icon: 'list'
    },
    {
      title: 'Pending Orders',
      url: '',
      icon: 'list'
    },
    {
      title: 'Pending Subscription Orders',
      url: '',
      icon: 'list'
    },
    {
      title: 'Completed Orders',
      url: '',
      icon: 'list'
    },
    {
      title: 'Subscriptions',
      url: '',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
