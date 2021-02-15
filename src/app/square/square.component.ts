import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-flat-button color="primary" *ngIf="!value">{{ value }}</button>
    <button mat-flat-button color="accent" *ngIf="value == 'X'">{{ value }}</button>
    <button mat-flat-button color="warn" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [`

    button{
      width:100%;
      height:100%;
    }

`]
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' = "X";

}
