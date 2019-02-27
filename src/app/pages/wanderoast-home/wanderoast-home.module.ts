import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WanderoastHomePage } from './wanderoast-home.page';

const routes: Routes = [
  {
    path: '',
    component: WanderoastHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WanderoastHomePage]
})
export class WanderoastHomePageModule {}
