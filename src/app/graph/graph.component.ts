import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GraphService } from './graph.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphAppComponent {
  state = [];
  total = [];
  chart = [];

  constructor(private _graph: GraphService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this._graph.dailyCases()
      .subscribe(res => {
        for (var i = 0; i < Object.keys(res).length; i++) {
          let count = 0;
          this.state[i] = res[i].state;
          for (var j = 0; j < Object.keys(res[i].districtData).length; j++) {
            count += res[i].districtData[j].confirmed;
          }
          this.total[i] = count;
        }
      });
    this.changeDetector.detectChanges();
    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      data: {
        labels: this.state,
        datasets: [{
          label: 'COVID19-STATE WISE CONFIRMED CASES',
          backgroundColor: '#024289',
          borderColor: '#166a8f',
          data: this.total
        }]
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}