import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { CatalogoPage } from './catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
