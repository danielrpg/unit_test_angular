import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'App unit testing TDD';
  stock: number;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.stock = this.appService.stock;
  }

  increment() {
    this.appService.increment();
    this.stock = this.appService.stock;
  }

  decrement() {
    this.appService.decrement();
    this.stock = this.appService.stock;
  }
}
