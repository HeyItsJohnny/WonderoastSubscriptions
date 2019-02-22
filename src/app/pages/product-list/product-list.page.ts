import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {

  products: Product[];

  constructor(
    private prodService: ProductsService
  ) { }

  ionViewWillEnter() {
    this.getProductData();
  }

  getProductData() {
    this.prodService.getProducts()
    .then(data => {
      this.products = data;
    })
  }

}
