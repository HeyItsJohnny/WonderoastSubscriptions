import { Component } from '@angular/core';
import { ProductUnitOfMeasure, ProductUnitOfMeasureService } from 'src/app/services/product-unit-of-measure.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-unit-of-measure-list',
  templateUrl: './product-unit-of-measure-list.page.html',
  styleUrls: ['./product-unit-of-measure-list.page.scss'],
})
export class ProductUnitOfMeasureListPage {

  productUOM: ProductUnitOfMeasure[];
  tmpUOM: ProductUnitOfMeasure = {
    UnitOfMeasure: '',
    Description: ''
  };
  productId = null;

  constructor(
    private route: ActivatedRoute, 
    private prodUOMService: ProductUnitOfMeasureService,
    public alertController: AlertController) { }


  ionViewWillEnter() {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.getUOMData();
    }
  }

  getUOMData() {
    this.prodUOMService.getProductUnitOfMeasures(this.productId)
    .then(data => {
      this.productUOM = data;
    })
  }

  AddUOMData() {
    this.alertController.create({
      header: 'New UOM',
      inputs: [
        {
          name: 'UOM',
          type: 'text',
          placeholder: 'Unit of Measure'
        },
        {
          name: 'UOMDescription',
          type: 'text',
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            var uomObj: ProductUnitOfMeasure = {
              UnitOfMeasure: data.UOM,
              Description: data.UOMDescription
            };       
            this.prodUOMService.addProductUnitOfMeasure(uomObj,this.productId);
            this.getUOMData();
          }
        }
      ]
    }).then(alert => alert.present());
  }

  viewDetails(item) {
    var test = this.prodUOMService.getProductUnitOfMeasure(item.payload.doc.id,this.productId).subscribe(res => {
       this.tmpUOM = res;
       this.displayView(item);      
       test.unsubscribe();
     });
   }

   displayView(item) {
    this.alertController.create({
      header: 'Edit UOM',
      inputs: [
        {
          name: 'UOM',
          type: 'text',
          value: this.tmpUOM.UnitOfMeasure
        },
        {
          name: 'UOMDescription',
          type: 'text',
          value: this.tmpUOM.Description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            try {
              this.tmpUOM.UnitOfMeasure = data.UOM;
              this.tmpUOM.Description = data.UOMDescription;      
              this.prodUOMService.updateProductUnitOfMeasure(this.tmpUOM,item.payload.doc.id,this.productId);   
              this.getUOMData();
            } catch(e) {
              console.log("ERROR: " + e);
            }
            
          }
        }
      ]
    }).then(alert => alert.present());
  }

  remove(item) {
    this.prodUOMService.removeProductUnitOfMeasure(item.payload.doc.id,this.productId);
    this.getUOMData();
  }

}
