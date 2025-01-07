import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent {
  @Input() label: string | undefined;
  @Output() action = new EventEmitter<void>();

  handleClick() {
    this.action.emit();
  }
}
