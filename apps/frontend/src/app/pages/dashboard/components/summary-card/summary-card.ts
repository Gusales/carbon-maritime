import { Component, Input } from "@angular/core";
import { StatusEnum } from "@shared/status/enums";
import { StatusType } from "@shared/status/types";

export const defaultCardTitle = new Map<StatusEnum, string>([
    [StatusEnum.APPROPRIATE, 'Rotas Adequadas'],
    [StatusEnum.ATTENTION, 'Rotas em Atenção'],
    [StatusEnum.CRITICAL, 'Rotas Críticas']
])

@Component({
    selector: 'app-summary-card',
    imports: [],
    templateUrl: './summary-card.html'
})
export class SummaryCard {
    @Input() cardType: StatusType = 'appropriate'
    @Input() value: number = 0
    cardHeaderTitle: string = ''

    constructor() {
        this.cardHeaderTitle = defaultCardTitle.get(StatusEnum[this.cardType.toUpperCase() as Uppercase<StatusType>]) || 'Rotas Adequadas';
    }

    get borderClass(): string {
        const classes: Record<StatusType, string> = {
            appropriate: 'border-status-success',
            attention: 'border-status-warning',
            critical: 'border-status-critical'
        }

        return classes[this.cardType]
    }

    get getTextColor(): string {
        const classes: Record<StatusType, string> = {
            appropriate: 'text-status-success',
            attention: 'text-status-warning',
            critical: 'text-status-critical'
        }

        return classes[this.cardType]
    }
}