import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilConductorPage } from './perfil.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/Servicios/auth.service';
import { of } from 'rxjs';
import { APIService } from 'src/app/Servicios/api.service';  

describe('PerfilConductorPage', () => {
  let component: PerfilConductorPage;
  let fixture: ComponentFixture<PerfilConductorPage>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let apiServiceMock: jasmine.SpyObj<APIService>; 

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['getUser']);
    apiServiceMock = jasmine.createSpyObj('APIService', ['listarUsuarios']);

    authServiceMock.getUser.and.returnValue(of({ username: 'testUser', email: 'testuser@example.com' }));
    apiServiceMock.listarUsuarios.and.returnValue(of([]));  

    await TestBed.configureTestingModule({
      declarations: [PerfilConductorPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,  
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: APIService, useValue: apiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

