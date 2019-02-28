import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductUnitOfMeasureListPage } from './product-unit-of-measure-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductUnitOfMeasureListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductUnitOfMeasureListPage]
})
export class ProductUnitOfMeasureListPageModule {}
