import { Component } from '@angular/core';
import { ProductRoastType, ProductRoastTypeService } from 'src/app/services/product-roast-type.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-roast-type-list',
  templateUrl: './product-roast-type-list.page.html',
  styleUrls: ['./product-roast-type-list.page.scss'],
})
export class ProductRoastTypeListPage {

  productRoastType: ProductRoastType[];
  tmpRoastType: ProductRoastType = {
    RoastType: '',
    Description: ''
  };
  productId = null;

  constructor(
    private route: ActivatedRoute, 
    private prodRoastTypeService: ProductRoastTypeService,
    public alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.getRoastTypeData();
    }
  }

  getRoastTypeData() {
    this.prodRoastTypeService.getProductRoastTypes(this.productId)
    .then(data => {
      this.productRoastType = data;
    })
  }

  AddRoastData() {
    this.alertController.create({
      header: 'New Roast Type',
      inputs: [
        {
          name: 'RoastType',
          type: 'text',
          placeholder: 'Roast Type'
        },
        {
          name: 'RTDescription',
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
            var roastObj: ProductRoastType = {
              RoastType: data.RoastType,
              Description: data.RTDescription
            };       
            this.prodRoastTypeService.addProductRoastType(roastObj,this.productId);
            this.getRoastTypeData();
          }
        }
      ]
    }).then(alert => alert.present());
  }

  viewDetails(item) {
   var test = this.prodRoastTypeService.getProductRoastType(item.payload.doc.id,this.productId).subscribe(res => {
      this.tmpRoastType = res;
      this.displayView(item);      
      test.unsubscribe();
    });
  }

  displayView(item) {
    this.alertController.create({
      header: 'Edit Roast Type',
      inputs: [
        {
          name: 'RoastType',
          type: 'text',
          value: this.tmpRoastType.RoastType
        },
        {
          name: 'RTDescription',
          type: 'text',
          value: this.tmpRoastType.Description
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
            this.tmpRoastType.RoastType = data.RoastType;
            this.tmpRoastType.Description = data.RTDescription;      
            this.prodRoastTypeService.updateProductRoastType(this.tmpRoastType,item.payload.doc.id,this.productId);   
            this.getRoastTypeData();
          }
        }
      ]
    }).then(alert => alert.present());
  }

  remove(item) {
    this.prodRoastTypeService.removeProductRoastType(item.payload.doc.id,this.productId);
    this.getRoastTypeData();
  }

}
