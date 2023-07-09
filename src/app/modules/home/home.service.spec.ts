import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

fdescribe('HomeService', () => {
  let service: HomeService;
  let http : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HomeService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call the get metod with endpoint correct', () => {
    const spy = spyOn(http, 'get').and.callThrough(); 
    service.getCategorias();
    expect(spy).toHaveBeenCalledOnceWith(environment.API_URL + "categories.php");
  });
});
