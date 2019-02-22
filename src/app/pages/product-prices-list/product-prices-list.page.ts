import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPrices, ProductPricesService } from 'src/app/services/product-prices.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-prices-list',
  templateUrl: './product-prices-list.page.html',
  styleUrls: ['./product-prices-list.page.scss'],
})
export class ProductPricesListPage {

  productPrices: ProductPrices[];
  productID = null;

  constructor(
    private prodPricesService: ProductPricesService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.productID = this.route.snapshot.params['id'];
    this.getProductData();
  }

  getProductData() {
    console.log("PROD ID: " + this.productID);
    this.prodPricesService.getProductPrices(this.productID)
    .then(data => {
      this.productPrices = data;
    })
  }

  viewDetails(item){
    this.router.navigateByUrl('/product-prices-details/' + item.payload.doc.id);
  }

  AddNewPrice() {
    this.alertController.create({
      header: 'New Product Price',
      inputs: [
        {
          name: 'RoastType',
          type: 'text',
          placeholder: 'Roast Type'
        },
        {
          name: 'UnitOfMeasure',
          type: 'text',
          placeholder: 'Unit of Measure'
        },
        {
          name: 'Price',
          type: 'number',
          placeholder: 'Price'
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
            var priceObj: ProductPrices = {
              UnitOfMeasure: data.UnitOfMeasure,
              RoastType: data.RoastType,
              Price: data.Price
            };       
            this.prodPricesService.addProductPrices(priceObj,this.productID); 
            this.getProductData();      
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
