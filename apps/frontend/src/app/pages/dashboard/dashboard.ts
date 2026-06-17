import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusType } from '@shared/status/types';
import { SummaryCard } from 'app/pages/dashboard/components/summary-card/summary-card';
import {
  CircleCheckBig,
  CircleX,
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

interface ISummaryCard {
  type: StatusType;
  value: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, LucideAngularModule, SummaryCard],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  public readonly summaryCards: ISummaryCard[] = [
    { type: 'appropriate' as const, value: 120 },
    { type: 'attention' as const, value: 75 },
    { type: 'critical' as const, value: 45 },
  ];

  public readonly recentRoutes: ShipRoute[] = [
    {
      id: 1,
      origin: 'Santos (BR)',
      destination: 'Rotterdam (NL)',
      vessel: 'Navio Alpha',
      ico2: 2.8,
      status: 'appropriate',
      date: '2026-04-20',
    },
    {
      id: 2,
      origin: 'Rio de Janeiro (BR)',
      destination: 'Shanghai (CN)',
      vessel: 'Navio Beta',
      ico2: 4.2,
      status: 'attention',
      date: '2026-04-19',
    },
    {
      id: 3,
      origin: 'Paranaguá (BR)',
      destination: 'Hamburg (DE)',
      vessel: 'Navio Gamma',
      ico2: 6.5,
      status: 'critical',
      date: '2026-04-18',
    },
    {
      id: 4,
      origin: 'Vitória (BR)',
      destination: 'Singapore (SG)',
      vessel: 'Navio Delta',
      ico2: 3.1,
      status: 'appropriate',
      date: '2026-04-17',
    },
  ];

  public readonly ShipIcon = Ship;
  public readonly RouteIcon = Route;
  public readonly CheckIcon = CircleCheckBig;
  public readonly AlertIcon = TriangleAlert;
  public readonly XIcon = CircleX;

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }
}
