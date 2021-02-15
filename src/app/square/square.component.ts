import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button style="color:white;font-size:2rem;padding:5% 0">
      {{ value }}
    </button>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | undefined;

}
