import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUserComponent } from './agregar-user.component';

describe('AgregarUserComponent', () => {
  let component: AgregarUserComponent;
  let fixture: ComponentFixture<AgregarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
