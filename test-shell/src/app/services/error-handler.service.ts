import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }
  logTest(err: any) {
    console.error(err);
    console.log('elo elo')
  }
}
