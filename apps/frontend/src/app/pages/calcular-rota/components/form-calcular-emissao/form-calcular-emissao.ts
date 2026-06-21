import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button';
import { InputComponent } from '@components/input';
import { LabelComponent } from '@components/label';
import { SelectComponent, SelectOption } from '@components/select';
import { Calculator, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-form-calcular-emissao',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    LabelComponent,
    SelectComponent,
    ButtonComponent,
    LucideAngularModule,
  ],
  templateUrl: './form-calcular-emissao.html',
})
export class FormCalcularEmissao {
  public readonly CalculatorIcon = Calculator;

  public readonly vessels: SelectOption[] = [
    {
      label: 'Navio Alfa',
      value: 'alfa',
    },
    {
      label: 'Navio Beta',
      value: 'beta',
    },
    {
      label: 'Navio Gamma',
      value: 'gamma',
    },
    {
      label: 'Navio Delta',
      value: 'delta',
    },
  ];
}
