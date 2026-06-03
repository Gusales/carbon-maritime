import { Routes } from '@angular/router';
import { CadastrarEmbarcacao } from './pages/cadastrar-embarcacao';
import { CalcularRota } from './pages/calcular-rota';
import { Dashboard } from './pages/dashboard';
import { Historico } from './pages/historico';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'cadastrar-embarcacao',
        component: CadastrarEmbarcacao
    },
    {
        path: 'calcular-rota',
        component: CalcularRota
    },
    {
        path: 'historico',
        component: Historico
    },
];
