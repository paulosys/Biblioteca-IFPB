import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarSalaComponent } from './gerenciar-sala.component';

describe('GerenciarSalaComponent', () => {
  let component: GerenciarSalaComponent;
  let fixture: ComponentFixture<GerenciarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
