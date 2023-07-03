import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorMenuComponent } from './gestor-menu.component';

describe('GestorMenuComponent', () => {
  let component: GestorMenuComponent;
  let fixture: ComponentFixture<GestorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
