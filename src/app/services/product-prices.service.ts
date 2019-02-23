import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';

export interface ProductPrices {
  id?: string;
  UnitOfMeasure: string;
  RoastType: string;
  Price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductPricesService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController) { }

    getProductPrices(productID: string) {
      return new Promise<any>((resolve, reject) => {
        this.db.collection('products').doc(productID).collection('productprices').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
      })
    }

    getProductPrice(id: string, productID: string) {
      let productPriceCollection = this.db.collection('products').doc(productID).collection('productprices');
      return productPriceCollection.doc<ProductPrices>(id).valueChanges();
    }

    addProductPrices(productPrices: ProductPrices, productID: string) {
      let productPriceCollection = this.db.collection('products').doc(productID).collection('productprices')
      return  productPriceCollection.add(productPrices);
    }

    updateProductPrices(productPrices: ProductPrices, id: string, productID: string) {
      let productPriceCollection = this.db.collection('products').doc(productID).collection('productprices');
      return  productPriceCollection.doc(id).update(productPrices);
    }

    removeProductPrices(id) {
      let productPriceCollection = this.db.collection('productprices');
      return productPriceCollection.doc(id).delete();
    }

}
