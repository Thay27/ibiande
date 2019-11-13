import { TestBed } from '@angular/core/testing';

import { PedidosService } from './pedidos.service';

describe('PedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidosService = TestBed.get(PedidosService);
    expect(service).toBeTruthy();
  });
});
