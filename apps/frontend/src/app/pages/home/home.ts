import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SummaryCard } from '@components/summary-card/summary-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SummaryCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public readonly summaryCards = [
    { type: 'appropriate' as const, value: 120 },
    { type: 'attention' as const, value: 75 },
    { type: 'critical' as const, value: 45 },
  ]
}
