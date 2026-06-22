import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContatos } from './exibe-contatos';

describe('ExibeContatos', () => {
  let component: ExibeContatos;
  let fixture: ComponentFixture<ExibeContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibeContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
