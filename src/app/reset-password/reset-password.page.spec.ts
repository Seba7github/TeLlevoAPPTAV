import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordPage } from './reset-password.page'; 
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/Servicios/auth.service'; 
import { of } from 'rxjs';

describe('ResetPasswordPage', () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;
  let authServiceMock: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['resetPassword']);


    authServiceMock.resetPassword.and.returnValue(Promise.resolve(true)); 

    await TestBed.configureTestingModule({
      declarations: [ResetPasswordPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,  
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },  
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
