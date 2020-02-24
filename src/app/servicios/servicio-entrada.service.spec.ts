import { TestBed } from '@angular/core/testing';

import { ServicioEntradaService } from './servicio-entrada.service';

describe('ServicioEntradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEntradaService = TestBed.get(ServicioEntradaService);
    expect(service).toBeTruthy();
  });
});
