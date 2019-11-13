import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../shared/categorias.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@ Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {
  //observable é um tipo de objeto que recebe array, várias colulas e várias linhas
categorias: Observable< any[]>;

  constructor(private categoriasService: CategoriasService, private toastr: ToastrService) { }

  ngOnInit() {
    this .categorias = this .categoriasService.getAll();
  }
  remover(key: string)  {
    this.categoriasService.remove(key)
      .catch((mensagem: string) =>{
        this.toastr.error(mensagem);
      });
    }
  }
