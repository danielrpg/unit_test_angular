import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  stock: number = 0;
  constructor() { }

  increment() {//: number {
    this.stock++;
   // return this.stock;
  }

  decrement() {//: number {
    this.stock--;
    //return this.stock;
  }
}
