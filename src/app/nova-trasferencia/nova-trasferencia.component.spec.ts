import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTrasferenciaComponent } from './nova-trasferencia.component';

describe('NovaTrasferenciaComponent', () => {
  let component: NovaTrasferenciaComponent;
  let fixture: ComponentFixture<NovaTrasferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTrasferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTrasferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
