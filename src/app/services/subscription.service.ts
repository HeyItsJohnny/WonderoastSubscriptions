import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from '@ionic/angular';

export interface Subscription {
  id?: string;
  Name: string;
  Email: string;
  ShipToAddress1: string;
  ShipToAddress2: string;
  ShipToCity: string;
  ShipToState: string;
  ShipToZipCode: string;
  Frequency: string;
  OrderID: string;
  StartDate: Date;
  EndDate: Date;
  NextOrderDate: Date;
  SearchName: string;
  SearchFrequency: string;
  SearchEmail: string;
  CreatedAt: number;
  UpdatedAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController,
    private afAuth: AngularFireAuth) { 

  }

  getSubscriptions() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('subscriptions').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getSubscription(id) {
    let subscriptionCollection = this.db.collection('subscriptions');
    return subscriptionCollection.doc<Subscription>(id).valueChanges();
  }

  addBSubscription(subscription: Subscription) {
    var tmp = subscription;
    tmp.SearchName = subscription.Name.toLowerCase();
    tmp.SearchFrequency = subscription.Frequency.toLowerCase();
    tmp.SearchEmail = subscription.Email.toLowerCase();

    let subscriptionCollection = this.db.collection('subscriptions');
    return  subscriptionCollection.add(tmp);
  }

  updateSubscription(subscription: Subscription, id: string) {
    var tmp = subscription;
    tmp.SearchName = subscription.Name.toLowerCase();
    tmp.SearchFrequency = subscription.Frequency.toLowerCase();
    tmp.SearchEmail = subscription.Email.toLowerCase();

    let subscriptionCollection = this.db.collection('subscriptions');
    return  subscriptionCollection.doc(id).update(tmp);
  }

  removeSubscription(id) {
    let subscriptionCollection = this.db.collection('subscriptions');
    return  subscriptionCollection.doc(id).delete;
  }
}
