import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-label',
    templateUrl: './label.html'
})
export class LabelComponent {
    @Input() for: string = ''
}