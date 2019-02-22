import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'admin-home', loadChildren: './pages/admin-home/admin-home.module#AdminHomePageModule' },
  { path: 'subscription-details', loadChildren: './pages/subscription-details/subscription-details.module#SubscriptionDetailsPageModule' },
  { path: 'subscription-details/:id', loadChildren: './pages/subscription-details/subscription-details.module#SubscriptionDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
