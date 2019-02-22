import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {

  products: Product[];

  constructor(
    private prodService: ProductsService,
    private router: Router
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

  viewDetails(item){
    this.router.navigateByUrl('/product-details/' + item.payload.doc.id);
  }
}
