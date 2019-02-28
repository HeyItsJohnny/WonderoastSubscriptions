import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';

export interface ProductRoastType {
  id?: string;
  RoastType: string;
  Description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductRoastTypeService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController) { }

    getProductRoastTypes(productID: string) {
      return new Promise<any>((resolve, reject) => {
        this.db.collection('products').doc(productID).collection('productroasttypes').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
      })
    }

    getProductRoastType(id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productroasttypes');
      return dataCollection.doc<ProductRoastType>(id).valueChanges();
    }

    addProductRoastType(productRoastType: ProductRoastType, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productroasttypes')
      return  dataCollection.add(productRoastType);
    }

    updateProductRoastType(productRoastType: ProductRoastType, id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productroasttypes');
      return  dataCollection.doc(id).update(productRoastType);
    }

    removeProductRoastType(id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productroasttypes');
      return dataCollection.doc(id).delete();
    }

}
