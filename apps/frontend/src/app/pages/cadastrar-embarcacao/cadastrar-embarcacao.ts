import { Component } from "@angular/core";
import { FormCriarEmbarcacao } from "./components/form-criar-embarcacao";

@Component({
    selector: 'app-cadastrar-embarcacao',
    imports: [FormCriarEmbarcacao],
    templateUrl: './cadastrar-embarcacao.html',
})
export class CadastrarEmbarcacao { }
