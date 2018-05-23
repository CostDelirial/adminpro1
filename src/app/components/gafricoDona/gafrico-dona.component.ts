import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gafrico-dona',
  templateUrl: './gafrico-dona.component.html',
  styles: []
})
export class GafricoDonaComponent implements OnInit {


   @Input('ChartLabels') doughnutChartLabels: string[] = [];
   @Input('ChartData') doughnutChartData: number[] = [];
   @Input('ChartType') doughnutChartType: string = '';

  
  constructor() { }

  ngOnInit() {
  }

}
