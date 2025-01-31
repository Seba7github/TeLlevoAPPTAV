import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage], 
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage); 
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
