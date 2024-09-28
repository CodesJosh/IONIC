import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipioPage } from './principio.page';

describe('PrincipioPage', () => {
  let component: PrincipioPage;
  let fixture: ComponentFixture<PrincipioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
