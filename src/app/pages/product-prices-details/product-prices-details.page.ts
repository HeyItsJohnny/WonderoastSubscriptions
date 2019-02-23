import { Component, OnInit } from '@angular/core';
import { ProductPrices, ProductPricesService } from 'src/app/services/product-prices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-product-prices-details',
  templateUrl: './product-prices-details.page.html',
  styleUrls: ['./product-prices-details.page.scss'],
})
export class ProductPricesDetailsPage implements OnInit {

  productPrice: ProductPrices = {
    UnitOfMeasure: '',
    RoastType: '',
    Price: 0
  };

  productPriceId = null;

  constructor(
    private prodPricesService: ProductPricesService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public menuController: MenuController,
    private loadingController: LoadingController,
    private router: Router,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.productPriceId = this.route.snapshot.params['id'];
    if (this.productPriceId)  {
      this.loadProductPrice();
    }
  }

  async loadProductPrice() {   
    const loading = await this.loadingController.create({
      message: 'Loading Product Price..'
    });
    await loading.present();
 
    /*this.prodPricesService.getProductPrice(this.productPriceId).subscribe(res => {
      loading.dismiss();
      this.productPrice = res;
    })*/
  }

  async saveProductPrice() {
    const loading = await this.loadingController.create({
      message: 'Saving Product..'
    });
    await loading.present();
 
    if (this.productPriceId) {
      /*this.prodPricesService.updateProductPrices(this.productPrice, this.productPriceId).then(() => {
        loading.dismiss();
        this.nav.pop();
      });*/
    }
  }

  async deleteProductPrice() {
    this.alertController.create({
      header: "Are you sure you want to delete this product price?",
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.prodPricesService.removeProductPrices(this.productPriceId).then(() => {
              this.nav.pop();
            });
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }
      ]
    }).then(alert => alert.present());
  }
}
