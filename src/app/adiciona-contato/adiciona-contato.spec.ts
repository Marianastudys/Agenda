import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaContatoComponent } from './adiciona-contato';

describe('AdicionaContatoComponent', () => {
  let component: AdicionaContatoComponent;
  let fixture: ComponentFixture<AdicionaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaContatoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionaContatoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
