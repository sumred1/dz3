import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  InfoAboutWork = `5 years of work at a factory and 2 years of work as a programmer`;
  texts: any = [
    {type: 'bold', title: 'hello!'},
    {type: 'italic', title: 'hello!'},
    {type: 'неизвестно', title: 'hello!'}
  ]
}
