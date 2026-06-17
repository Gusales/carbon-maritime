import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export interface ToggleOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-toogle-group',
  imports: [],
  templateUrl: './toogle-group.html',
})
export class ToogleGroupComponent implements OnChanges {
  @Input() options: ToggleOption[] = [];
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && !this.value && this.options.length > 0) {
      this.value = this.options[0].value;
    }
  }

  onSelect(option: ToggleOption): void {
    this.value = option.value;
    this.valueChange.emit(option.value);
  }
}
