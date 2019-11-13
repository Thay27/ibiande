import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/shared/carrinho.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MontagemService } from '../shared/montagem.service';

@Component({
  selector: 'app-lista-montagem',
  templateUrl: './lista-montagem.page.html',
  styleUrls: ['./lista-montagem.page.scss'],
})

export class ListaMontagemPage implements OnInit {
    montagem: Observable<any[]>;
    categorias: Observable<any[]>;
    categoriaSelecionada: string;
    carrinhoPossuiItens: boolean = false;
  
    constructor(private router: Router,
                private montagemService: MontagemService,
                private carrinhoService: CarrinhoService,
                private afAuth: AngularFireAuth) { }

  ngOnInit() {
    // this.montagem = this.montagemService.getAll(null);
    // this.categorias = this.montagemService.getCategoriasAll();
    // this.carrinhoService.carrinhoPossuiItens().subscribe( (existemItens: boolean) => {
    //     this.carrinhoPossuiItens = existemItens;
    //   })
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
  
}
