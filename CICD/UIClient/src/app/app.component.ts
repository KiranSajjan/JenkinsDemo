import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleclass: Boolean = false;


  public toggleclass1(event) {
    this.toggleclass = event;
  }

}
