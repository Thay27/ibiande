import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../shared/pedidos.service';

@Component({
  selector: 'app-lista-produto-pedido',
  templateUrl: './lista-produto-pedido.page.html',
  styleUrls: ['./lista-produto-pedido.page.scss'],
})
export class ListaProdutoPedidoPage implements OnInit {
  produtos: Observable<any[]>

  constructor(private route: ActivatedRoute, private pedidoService: PedidosService) { }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      this.produtos = this.pedidoService.getAllProdutos(key);
    }
  }

}
