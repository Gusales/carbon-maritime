import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SummaryCard } from 'app/pages/dashboard/components/summary-card/summary-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SummaryCard],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  public readonly summaryCards = [
    { type: 'appropriate' as const, value: 120 },
    { type: 'attention' as const, value: 75 },
    { type: 'critical' as const, value: 45 },
  ]
}
