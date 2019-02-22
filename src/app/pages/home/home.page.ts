import { Component} from '@angular/core';
import { Subscription, SubscriptionService} from 'src/app/services/subscription.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  subscription: Subscription = {
    Name: '',
    Email: '',
    ShipToAddress1: '',
    ShipToAddress2: '',
    ShipToCity: '',
    ShipToState: '',
    ShipToZipCode: '',
    Frequency: '',
    OrderID: '',
    StartDate: null,
    EndDate: null,
    NextOrderDate: null,
    SearchName: '',
    SearchFrequency: '',
    SearchEmail: '',
    CreatedAt: 0,
    UpdatedAt: 0
  };

  constructor() {}

  /*constructor(
    private subscriptionService: SubscriptionService,
    public menuController: MenuController,
    public alertController: AlertController) { }*/

  addSubscription() {
    if (this.allFieldsFilledOut()) {
      SubscriptionService
      //this.subscriptionService.addBSubscription(this.subscription);
    }
  }

  allFieldsFilledOut():boolean {
    if (this.subscription.Name == "") {

      return false;
    } else if (this.subscription.Email== "") {

      return false;
    } else if (this.subscription.ShipToAddress1 == "") {

      return false;
    } else if (this.subscription.ShipToCity == "") {

      return false;
    } else if (this.subscription.ShipToState == "") {

      return false;
    } else if (this.subscription.ShipToZipCode== "") {

      return false;
    } else if (this.subscription.Frequency == "") {

      return false;
    } else if (this.subscription.OrderID== "") {

      return false;
    }
    return true;
  }


}
