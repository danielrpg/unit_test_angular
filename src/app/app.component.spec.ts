import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppServiceMock } from './app-service.mock';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { AppService } from './app.service';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  let incrementSpy: jasmine.Spy;
  let decrementSpy: jasmine.Spy;

  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        { providers: AppService, useClass: AppServiceMock}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    service = TestBed.inject(AppService);
    incrementSpy = spyOn(service, 'increment');
    decrementSpy = spyOn(service, 'decrement');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'App unit testing TDD'`, () => {
    expect(component.title).toEqual('App unit testing TDD');
  });

  it(`should call increment() "when service is called"`, () => {
    component.increment();
    expect(incrementSpy).toHaveBeenCalled();
  });

  it(`should call decrement() "when service is called"`, () => {
    component.decrement();
    expect(decrementSpy).toHaveBeenCalled();
  });



});
