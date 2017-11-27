import { Component, ViewChild } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from '../app.reducer';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { AnalitycsService } from './analitycs.service';

@Component({
  selector: 'analitycs',
  templateUrl: './analitycs.component.html'
})
export class AnalitycsComponent {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective;
    public data: any;
    iteraciones: number = 0;
    randomNumero: number;
    time: number;

    chartOptions = {
        responsive: true,
        maintainAspectRatio: false    
    }; 

    chartData = [
        {
            label: "Calle 85",
            data: []
        }, {
            label: "Salitre plaza",
            data: []
        }, {
            label: "Parque 93",
            data: []
        }, {
            label: "Calle 80",
            data: []
        }, {
            label: "Centro",
            data: []
        }
    ];

    chartLabels = [];

    barChartLabels = [1000];

    barChartData = [
        {
            label: "Calle 85",
            data: [9]
        }, {
            label: "Salitre plaza",
            data: [18]
        }, {
            label: "Parque 93",
            data: [15]
        }, {
            label: "Calle 80",
            data: [8]
        }, {
            label: "Centro",
            data: [2]
        }
    ];

    doughnutChartLabels:string[] = ["Calle 85", "Salitre plaza", "Parque 93", "Calle 80", "Centro"];
    doughnutChartData:number[] = [350, 450, 100, 200, 300];

    constructor(private ngRedux: NgRedux<IAppStore>,
                private analitycsService: AnalitycsService) {}

    ngOnInit() {
        this.ngRedux.dispatch({ type: 'ANALITYCS' }); 
        setInterval(() => {
            this.intervalo();            
          }, 60000);
    }

    intervalo(){
        if(this.iteraciones == 0){
            this.iteraciones = this.iteraciones + 1;
            this.analitycsService.getData().then(resp => {
                for(var i = 0; i < resp.length; i++){
                    for(var j = 0; j < resp[i].data.length; j++){                        
                        this.chartData[i].data.push(resp[i].data[j].speed);
                        this.barChartData[i].data.push(resp[i].data[j].speed);
                    }
                }
                for(var i = 0; i < resp[0].data.length; i++){
                    this.time = resp[0].data[i].time;
                    this.chartLabels.push(this.time);
                }
            })
        }else{
            this.iteraciones = this.iteraciones + 1;
            this.time = this.time + 1000;
            for(var i = 0; i < 5; i++){
                this.randomNumero =  Math.round(Math.random()*20) + 1);
                this.chartData[i].data.push(this.randomNumero);
                this.barChartData[i].data.push(this.randomNumero);
            } 
            this.chartLabels.push(this.time);           
        }
        this.chart.chart.update(); 
    }

}