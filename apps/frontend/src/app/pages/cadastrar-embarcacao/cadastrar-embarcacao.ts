import { Component } from '@angular/core';
import { LucideAngularModule, Ship } from 'lucide-angular';
import { FormCriarEmbarcacao } from './components/form-criar-embarcacao';

@Component({
  selector: 'app-cadastrar-embarcacao',
  imports: [FormCriarEmbarcacao, LucideAngularModule],
  templateUrl: './cadastrar-embarcacao.html',
})
export class CadastrarEmbarcacao {
  public readonly ShipIcon = Ship;
}
