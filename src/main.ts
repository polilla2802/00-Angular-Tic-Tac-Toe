import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {BinarySearch} from './algos/BinarySearch';
import {JumpSearch} from './algos/JumpSearch';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function log(message: string) {
  console.log(message);
}
let message = 'Test';
log(message); 


var myArray: number[] = new Array(1, 2, 3, 4, 4, 5, 5, 6, 7, 8);
var N = myArray.length;
var x = 3;
console.log("myArray " + myArray);
console.log("N " + N);
console.log("x " + x);

var binary = BinarySearch(myArray, 0, N, x);
console.log("binary res: " + binary);

var jump = JumpSearch(myArray, x, N);
console.log("jump res: " + binary);
