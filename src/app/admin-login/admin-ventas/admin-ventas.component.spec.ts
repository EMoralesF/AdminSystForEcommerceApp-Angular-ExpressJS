import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVentasComponent } from './admin-ventas.component';

describe('AdminVentasComponent', () => {
  let component: AdminVentasComponent;
  let fixture: ComponentFixture<AdminVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
