import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../shared/produtos.service';
import { CarrinhoService } from 'src/app/carrinho/shared/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;
  carrinhoPossuiItens: boolean = false;

  constructor(private router: Router,
              private produtosService: ProdutosService,
              private carrinhoService: CarrinhoService,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll(null);
    this.categorias = this.produtosService.getCategoriasAll();
    this.carrinhoService.carrinhoPossuiItens().subscribe( (existemItens: boolean) => {
    this.carrinhoPossuiItens = existemItens;
    })
  }

  logar() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.router.navigate(['/login'])
      } else {
       this.router.navigate(['/perfil']);
      }
    })
  
  }

  comprar() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.router.navigate(['/login'])
      } else {
       this.router.navigate(['/carrinho']);
      }
    })
  
  }
  
  buscarProdutos(){
    this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
  }

  adicionarProduto(produtoKey: string) {
    this.router.navigate(['/carrinho/novo-item/', produtoKey]);
  }

}
