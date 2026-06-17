import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  standalone: true,
})
export class ButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.isLoading) {
      this.clicked.emit(event);
    }
  }
}
