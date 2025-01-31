import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilConductorPage } from './perfil.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/Servicios/auth.service'; // Ajusta el path si es necesario
import { of } from 'rxjs';
import { APIService } from 'src/app/Servicios/api.service';  // Asegúrate de importar el servicio APIService

describe('PerfilConductorPage', () => {
  let component: PerfilConductorPage;
  let fixture: ComponentFixture<PerfilConductorPage>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let apiServiceMock: jasmine.SpyObj<APIService>; // Mock para APIService

  beforeEach(async () => {
    // Crear el mock del servicio AuthService
    authServiceMock = jasmine.createSpyObj('AuthService', ['getUser']);
    // Crear el mock del servicio APIService (si es necesario para las pruebas)
    apiServiceMock = jasmine.createSpyObj('APIService', ['listarUsuarios']);

    // Configurar el comportamiento del mock para devolver un usuario simulado
    authServiceMock.getUser.and.returnValue(of({ username: 'testUser', email: 'testuser@example.com' }));
    apiServiceMock.listarUsuarios.and.returnValue(of([]));  // Mock para la llamada a listarUsuarios()

    await TestBed.configureTestingModule({
      declarations: [PerfilConductorPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,  // Asegúrate de que esté aquí
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: APIService, useValue: apiServiceMock }, // Proveer el mock del servicio APIService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Necesario para que el componente se inicialice y se accedan los datos
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

