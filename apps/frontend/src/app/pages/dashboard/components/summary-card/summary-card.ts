import { Component, Input } from '@angular/core';
import { StatusEnum } from '@shared/status/enums';
import {
  CircleCheckBig,
  CircleX,
  LucideAngularModule,
  LucideIconData,
  TriangleAlert
} from 'lucide-angular';

export const defaultCardTitle = new Map<StatusEnum, string>([
  [StatusEnum.APPROPRIATE, 'Rotas Adequadas'],
  [StatusEnum.ATTENTION, 'Rotas em Atenção'],
  [StatusEnum.CRITICAL, 'Rotas Críticas'],
]);

@Component({
  selector: 'app-summary-card',
  imports: [LucideAngularModule],
  templateUrl: './summary-card.html',
})
export class SummaryCard {
  @Input() cardType: StatusEnum = StatusEnum.APPROPRIATE;
  @Input() value: number = 0;

  get cardHeaderTitle(): string {
    return defaultCardTitle.get(this.cardType) || 'Rotas Adequadas';
  }

  get getBorderClass(): string {
    const classes: Record<StatusEnum, string> = {
      [StatusEnum.APPROPRIATE]: 'border-status-success',
      [StatusEnum.ATTENTION]: 'border-status-warning',
      [StatusEnum.CRITICAL]: 'border-status-critical',
    };

    return classes[this.cardType];
  }

  get getStatusColor(): string {
    const classes: Record<StatusEnum, string> = {
      [StatusEnum.APPROPRIATE]: 'text-status-success',
      [StatusEnum.ATTENTION]: 'text-status-warning',
      [StatusEnum.CRITICAL]: 'text-status-critical',
    };

    return classes[this.cardType];
  }

  get getTextColor(): string {
    const classes: Record<StatusEnum, string> = {
      [StatusEnum.APPROPRIATE]: 'text-status-success',
      [StatusEnum.ATTENTION]: 'text-status-warning',
      [StatusEnum.CRITICAL]: 'text-status-critical',
    };

    return classes[this.cardType];
  }

  get getStatusIcon(): LucideIconData {
    const icons: Record<StatusEnum, LucideIconData> = {
      [StatusEnum.APPROPRIATE]: CircleCheckBig,
      [StatusEnum.ATTENTION]: TriangleAlert,
      [StatusEnum.CRITICAL]: CircleX,
    };

    return icons[this.cardType];
  }
}
