import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilme } from './lista-filme';

describe('ListaFilme', () => {
  let component: ListaFilme;
  let fixture: ComponentFixture<ListaFilme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFilme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFilme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
