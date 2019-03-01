import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPrices, ProductPricesService } from 'src/app/services/product-prices.service';
import { AlertController, Events } from '@ionic/angular';

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
    public events: Events,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.getProductPriceData();
  }

  getProductPriceData() {
    this.productID = this.route.snapshot.params['id'];
    if (this.productID) {
      this.events.publish('price:created', this.productID); 
      this.prodPricesService.getProductPrices(this.productID)
      .then(data => {
        this.productPrices = data;
      })
    }
  }

  viewDetails(item){
    try{
      this.router.navigateByUrl('/product-prices-details/' + item.payload.doc.id);
    } catch(e) {
      console.log("Error: " + e);
    }
    
  }

  remove(item) {
    this.prodPricesService.removeProductPrices(item.payload.doc.id,this.productID);
    this.getProductPriceData();
  }

}
