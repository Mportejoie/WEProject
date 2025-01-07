import { Component } from '@angular/core';

@Component({
  selector: 'app-container-category-button',
  templateUrl: './container-category-button.component.html',
  styleUrls: ['./container-category-button.component.css']
})
export class ContainerCategoryButtonComponent {
  buttons = [
    { label: 'Button 1', action: this.button1Action.bind(this) },
    { label: 'Button 2', action: this.button2Action.bind(this) },
    { label: 'Button 3', action: this.button3Action.bind(this) },
    { label: 'Button 4', action: this.button4Action.bind(this) }
  ];

  button1Action() {
    console.log('Button 1 clicked');
  }

  button2Action() {
    console.log('Button 2 clicked');
  }

  button3Action() {
    console.log('Button 3 clicked');
  }

  button4Action() {
    console.log('Button 4 clicked');
  }
}
