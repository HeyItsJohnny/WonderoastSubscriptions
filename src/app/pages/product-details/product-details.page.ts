import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Product = {
    Name: '',
    Description: '',
    SoldOut: false,
    SearchName: ''
  };

  productId = null;

  constructor(
    private route: ActivatedRoute, 
    private nav: NavController, 
    private prodService: ProductsService,
    public alertController: AlertController,
    public menuController: MenuController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId)  {
      this.loadProduct();
    }
  }

  async loadProduct() {   
    const loading = await this.loadingController.create({
      message: 'Loading Product..'
    });
    await loading.present();
 
    this.prodService.getProduct(this.productId).subscribe(res => {
      loading.dismiss();
      this.product = res;
    })
  }

  async saveProduct() {
    const loading = await this.loadingController.create({
      message: 'Saving Product..'
    });
    await loading.present();
 
    if (this.productId) {
      this.prodService.updateProduct(this.product, this.productId).then(() => {
        loading.dismiss();
        this.nav.pop();
      });
    } else {
      this.prodService.addProduct(this.product).then(() => {
        loading.dismiss();
        this.nav.pop();
      });
    }
  }

  async deleteProduct() {
    this.alertController.create({
      header: "Are you sure you want to delete this product?",
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.prodService.removeProduct(this.productId).then(() => {
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

  viewProductPrices() {
    this.router.navigateByUrl('/product-prices-list/' + this.productId);
  }

  viewRoastTypes() {
    this.router.navigateByUrl('/product-roast-type-list/' + this.productId);
  }

  viewUnitOfMeasures() {
    this.router.navigateByUrl('/product-unit-of-measure-list/' + this.productId);
  }


}
