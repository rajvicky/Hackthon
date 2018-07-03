import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecornerComponent } from './employeecorner.component';

describe('EmployeecornerComponent', () => {
  let component: EmployeecornerComponent;
  let fixture: ComponentFixture<EmployeecornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
