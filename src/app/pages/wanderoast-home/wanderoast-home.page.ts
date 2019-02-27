import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-wanderoast-home',
  templateUrl: './wanderoast-home.page.html',
  styleUrls: ['./wanderoast-home.page.scss'],
})
export class WanderoastHomePage implements OnInit {

  constructor(
    public menuController: MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

}
