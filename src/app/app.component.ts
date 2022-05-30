import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-practice';
  data = {
    Name:"Bhushan",
    Age:"26",
    Email:"test@test.com"
  };
  parentFunction(data1: any)
  {console.warn(data1)}
}
