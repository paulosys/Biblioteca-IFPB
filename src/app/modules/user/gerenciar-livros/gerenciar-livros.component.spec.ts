import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarLivrosComponent } from './gerenciar-livros.component';

describe('GerenciarLivrosComponent', () => {
  let component: GerenciarLivrosComponent;
  let fixture: ComponentFixture<GerenciarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
