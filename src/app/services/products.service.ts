import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from '@ionic/angular';

export interface Product {
  id?: string;
  Name: string;
  Description: string;
  SoldOut: boolean;
  PriceID: string;
  SearchName: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController) { }

  getProducts() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('products').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getProduct(id) {
    let productCollection = this.db.collection('products');
    return productCollection.doc<Product>(id).valueChanges();
  }

  addProduct(product: Product) {
    var tmp = product;
    tmp.SearchName = product.Name.toLowerCase();

    let productCollection = this.db.collection('products');
    return  productCollection.add(tmp);
  }

  updateProduct(product: Product, id: string) {
    var tmp = product;
    tmp.SearchName = product.Name.toLowerCase();

    let productCollection = this.db.collection('products');
    return  productCollection.doc(id).update(tmp);
  }

  removeProduct(id) {
    let BudgetsCollection = this.db.collection('products');
    return BudgetsCollection.doc(id).delete();
  }
}
