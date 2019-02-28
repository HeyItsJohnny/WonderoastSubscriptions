import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductRoastTypeListPage } from './product-roast-type-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductRoastTypeListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductRoastTypeListPage]
})
export class ProductRoastTypeListPageModule {}
