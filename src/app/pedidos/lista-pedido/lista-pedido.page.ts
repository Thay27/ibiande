import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../shared/pedidos.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.page.html',
  styleUrls: ['./lista-pedido.page.scss'],
})
export class ListaPedidoPage implements OnInit {
  pedidos: Observable<any[]>

  constructor(private pedidoService: PedidosService,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit() {
    this.pedidos = this.pedidoService.getAllAbertos();
  }

  getStatusNome(status: number) {
    return this.pedidoService.getStatusNome(status);
  }

  getFormaPagamentoNome(formaPagamento: number) {
    return this.pedidoService.getFormaPagamento(formaPagamento);
  }

  executarBusca($event: any) {
    if ($event.target.checked) {
      this.pedidos = this.pedidoService.getAll();
    } else {
      this.pedidos = this.pedidoService.getAllAbertos();
    }
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
