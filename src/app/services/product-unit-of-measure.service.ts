import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';

export interface ProductUnitOfMeasure {
  id?: string;
  UnitOfMeasure: string;
  Description: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductUnitOfMeasureService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController) { }

    getProductUnitOfMeasures(productID: string) {
      return new Promise<any>((resolve, reject) => {
        this.db.collection('products').doc(productID).collection('productunitofmeasures').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
      })
    }

    getProductUnitOfMeasure(id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productunitofmeasures');
      return dataCollection.doc<ProductUnitOfMeasure>(id).valueChanges();
    }

    addProductUnitOfMeasure(productUOM: ProductUnitOfMeasure, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productunitofmeasures')
      return  dataCollection.add(productUOM);
    }

    updateProductUnitOfMeasure(productUOM: ProductUnitOfMeasure, id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productunitofmeasures');
      return  dataCollection.doc(id).update(productUOM);
    }

    removeProductUnitOfMeasure(id: string, productID: string) {
      let dataCollection = this.db.collection('products').doc(productID).collection('productunitofmeasures');
      return dataCollection.doc(id).delete();
    }

}
