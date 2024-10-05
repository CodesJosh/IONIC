import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApitestPage } from './apitest.page';

describe('ApitestPage', () => {
  let component: ApitestPage;
  let fixture: ComponentFixture<ApitestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
