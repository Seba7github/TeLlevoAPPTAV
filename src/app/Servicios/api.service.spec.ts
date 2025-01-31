import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa este módulo
import { APIService } from './api.service';  // Asegúrate de tener la importación correcta

describe('APIService', () => {
  let service: APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de que esté aquí
    });
    service = TestBed.inject(APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
