import { Component, OnInit } from '@angular/core';
import { ProductPrices, ProductPricesService } from 'src/app/services/product-prices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController, MenuController, Events } from '@ionic/angular';

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
  productId = null;

  constructor(
    private prodPricesService: ProductPricesService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public menuController: MenuController,
    private loadingController: LoadingController,
    private router: Router,
    public events: Events,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.events.subscribe('price:created', set => {
      this.productId = set;
      this.productPriceId = this.route.snapshot.params['id'];
      if (this.productPriceId)  {
        this.loadProductPrice();
      }
    });
  }

  async loadProductPrice() {   
    const loading = await this.loadingController.create({
      message: 'Loading Product Price..'
    });
    await loading.present();
 
    this.prodPricesService.getProductPrice(this.productPriceId,this.productId).subscribe(res => {
      loading.dismiss();
      this.productPrice = res;
    })
  }

  async saveProductPrice() {
    const loading = await this.loadingController.create({
      message: 'Saving Product..'
    });
    await loading.present();
 
    if (this.productPriceId) {
      this.prodPricesService.updateProductPrices(this.productPrice, this.productPriceId, this.productId).then(() => {
        loading.dismiss();
        this.nav.pop();
      });
    } else {
      this.prodPricesService.addProductPrices(this.productPrice, this.productId).then(() => {
        loading.dismiss();
        this.nav.pop();
      });
    }
  }
}
