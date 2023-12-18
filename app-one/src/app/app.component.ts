import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-one';
  worker!: Worker;
  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('./test.worker', import.meta.url));

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  fibonacci(num: number): number {
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  ngOnInit(): void {
    this.worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    };
    this.worker.postMessage(42);
   // console.log(this.fibonacci(42));
  }
}
