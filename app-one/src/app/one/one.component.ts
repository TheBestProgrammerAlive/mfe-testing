import { Component } from '@angular/core';

function first() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  };
}
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {

  @first()
  someRandom() {
    console.log('some function');
  }
  constructor() {
  }

}
