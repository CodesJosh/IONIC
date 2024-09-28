import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UberPage } from './uber.page';

describe('UberPage', () => {
  let component: UberPage;
  let fixture: ComponentFixture<UberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
