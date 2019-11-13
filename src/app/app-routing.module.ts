import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'criar-endereco', loadChildren: './enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule' },
  { path: 'endereco', loadChildren: './enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule' },
  { path: 'enderecos/editar/:key', loadChildren: './enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule' },
  { path: 'produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule' },
  { path: 'montagem', loadChildren: './montagem/lista-montagem/lista-montagem.module#ListaMontagemPageModule' },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './usuarios/perfil/perfil.module#PerfilPageModule' },
  { path: 'carrinho', loadChildren: './carrinho/carrinho/carrinho.module#CarrinhoPageModule' },
  { path: 'carrinho/novo-item/:key', loadChildren: './pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'},
  { path: 'logar', loadChildren: './core/shared/logar/logar.module#LogarPageModule' },
  { path: 'form-pagamento', loadChildren: './pedidos/form-pagamento/form-pagamento.module#FormPagamentoPageModule' },
  { path: 'lista-pedido', loadChildren: './pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule' },
  { path: 'lista-produto-pedido', loadChildren: './pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule' },
  { path: 'catalogo', loadChildren: './produtos/catalogo/catalogo.module#CatalogoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
