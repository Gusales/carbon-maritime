import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalcularEmissao } from './form-calcular-emissao';

describe('FormCalcularEmissao', () => {
  let component: FormCalcularEmissao;
  let fixture: ComponentFixture<FormCalcularEmissao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalcularEmissao],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCalcularEmissao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
