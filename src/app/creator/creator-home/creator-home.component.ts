import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-home',
  templateUrl: './creator-home.component.html',
  styleUrls: ['./creator-home.component.css']
})



export class CreatorHomeComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];

  
  constructor() {
    Object.assign(this, { single });
  }


  ngOnInit() {
  }

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}


export var single = [
  {
    "name": "Total Events",
    "value": 13
  },
  {
    "name": "Upcoming Events",
    "value": 21
  },
  {
    "name": "Completed Events",
    "value": 32
  }
     
];