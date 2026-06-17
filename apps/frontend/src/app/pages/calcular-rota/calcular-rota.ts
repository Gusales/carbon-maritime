import { Component } from '@angular/core';
import { Calculator, LucideAngularModule } from 'lucide-angular';
import { FormCalcularEmissao } from './components/form-calcular-emissao/form-calcular-emissao';

@Component({
  selector: 'app-calcular-rota',
  imports: [FormCalcularEmissao, LucideAngularModule],
  templateUrl: './calcular-rota.html',
})
export class CalcularRota {
  public CalculatorIcon = Calculator;
}
