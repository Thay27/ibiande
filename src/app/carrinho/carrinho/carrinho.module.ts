import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/core/shared/shared/shared.module';
import { CarrinhoPage } from './carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarrinhoPage]
})
export class CarrinhoPageModule {}
