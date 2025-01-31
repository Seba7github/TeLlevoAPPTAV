import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APIService } from './api.service'; 
describe('APIService', () => {
  let service: APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [APIService],            
    });
    service = TestBed.inject(APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

