import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarLivroComponent } from './gerenciar-livro.component';

describe('GerenciarLivroComponent', () => {
  let component: GerenciarLivroComponent;
  let fixture: ComponentFixture<GerenciarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
