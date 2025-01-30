import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotoPage } from './piloto.page';

describe('PilotoPage', () => {
  let component: PilotoPage;
  let fixture: ComponentFixture<PilotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
