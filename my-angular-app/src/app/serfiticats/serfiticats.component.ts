import { Component } from '@angular/core';

@Component({
  selector: 'app-serfiticats',
  templateUrl: './serfiticats.component.html',
  styleUrls: ['./serfiticats.component.scss']
})
export class SerfiticatsComponent {
  sertificats = [
    {title: 'step', year: 2020},
    {title: 'it school', year: 2012},
    {title: 'GoIT', year: 2015},
    {title: 'Programm school', year: 2010},
    {title: 'It academy', year: 2011}
  ]
}
