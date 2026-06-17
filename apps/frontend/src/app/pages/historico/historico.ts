import { Component } from '@angular/core';
import { ToggleOption, ToogleGroupComponent } from '@components/toogle-group';
import { StatusType } from '@shared/status/types';
import {
  CircleCheckBig,
  CircleX,
  Funnel,
  LucideAngularModule,
  Route,
  Ship,
  TriangleAlert,
} from 'lucide-angular';

interface ShipRoute {
  id: number;
  origin: string;
  destination: string;
  vessel: string;
  ico2: number;
  status: StatusType;
  date: string;
}

@Component({
  selector: 'app-historico',
  imports: [LucideAngularModule, ToogleGroupComponent],
  templateUrl: './historico.html',
})
export class Historico {
  public readonly FunnelIcon = Funnel;
  public readonly ShipIcon = Ship;
  public readonly RouteIcon = Route;
  public readonly CheckIcon = CircleCheckBig;
  public readonly AlertIcon = TriangleAlert;
  public readonly XIcon = CircleX;

  public readonly recentRoutes: ShipRoute[] = [
    {
      id: 1,
      origin: 'Santos (BR)',
      destination: 'Rotterdam (NL)',
      vessel: 'Navio Alpha',
      ico2: 2.8,
      status: 'appropriate',
      date: '2026-04-19',
    },
    {
      id: 2,
      origin: 'Rio de Janeiro (BR)',
      destination: 'Shanghai (CN)',
      vessel: 'Navio Beta',
      ico2: 4.2,
      status: 'attention',
      date: '2026-04-18',
    },
    {
      id: 3,
      origin: 'Paranaguá (BR)',
      destination: 'Hamburg (DE)',
      vessel: 'Navio Gamma',
      ico2: 6.5,
      status: 'critical',
      date: '2026-04-17',
    },
    {
      id: 4,
      origin: 'Vitória (BR)',
      destination: 'Singapore (SG)',
      vessel: 'Navio Delta',
      ico2: 3.1,
      status: 'appropriate',
      date: '2026-04-16',
    },
    {
      id: 5,
      origin: 'São Luís (BR)',
      destination: 'Dubai (UAE)',
      vessel: 'Navio Beta',
      ico2: 5.8,
      status: 'critical',
      date: '2026-04-15',
    },
    {
      id: 6,
      origin: 'Itajaí (BR)',
      destination: 'New York (US)',
      vessel: 'Navio Alpha',
      ico2: 3.9,
      status: 'attention',
      date: '2026-04-14',
    },
    {
      id: 7,
      origin: 'Salvador (BR)',
      destination: 'Lagos (NG)',
      vessel: 'Navio Gamma',
      ico2: 2.5,
      status: 'appropriate',
      date: '2026-04-13',
    },
  ];

  public readonly filterOptions: ToggleOption[] = [
    {
      label: 'Todas (7)',
      value: 'all',
    },
    {
      label: 'Adequado (3)',
      value: 'adequate',
    },
    {
      label: 'Atenção (2)',
      value: 'attention',
    },
    {
      label: 'Crítico (2)',
      value: 'critical',
    },
  ];

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }
}
