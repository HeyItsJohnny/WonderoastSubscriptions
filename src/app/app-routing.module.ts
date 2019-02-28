import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'wanderoast-home', pathMatch: 'full' },
  { path: 'wanderoast-home', loadChildren: './pages/wanderoast-home/wanderoast-home.module#WanderoastHomePageModule' },
  { path: 'admin-home', loadChildren: './pages/admin-home/admin-home.module#AdminHomePageModule' },
  { path: 'subscription-details', loadChildren: './pages/subscription-details/subscription-details.module#SubscriptionDetailsPageModule' },
  { path: 'subscription-details/:id', loadChildren: './pages/subscription-details/subscription-details.module#SubscriptionDetailsPageModule' },
  { path: 'product-list', loadChildren: './pages/product-list/product-list.module#ProductListPageModule' },
  { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'product-details/:id', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'product-prices-list', loadChildren: './pages/product-prices-list/product-prices-list.module#ProductPricesListPageModule' },
  { path: 'product-prices-details', loadChildren: './pages/product-prices-details/product-prices-details.module#ProductPricesDetailsPageModule' },
  { path: 'product-prices-list/:id', loadChildren: './pages/product-prices-list/product-prices-list.module#ProductPricesListPageModule' },
  { path: 'product-prices-details/:id/:prodid', loadChildren: './pages/product-prices-details/product-prices-details.module#ProductPricesDetailsPageModule' },
  { path: 'product-roast-type-list', loadChildren: './pages/product-roast-type-list/product-roast-type-list.module#ProductRoastTypeListPageModule' },
  { path: 'product-unit-of-measure-list', loadChildren: './pages/product-unit-of-measure-list/product-unit-of-measure-list.module#ProductUnitOfMeasureListPageModule' },
  { path: 'product-roast-type-list/:id', loadChildren: './pages/product-roast-type-list/product-roast-type-list.module#ProductRoastTypeListPageModule' },
  { path: 'product-unit-of-measure-list/:id', loadChildren: './pages/product-unit-of-measure-list/product-unit-of-measure-list.module#ProductUnitOfMeasureListPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
