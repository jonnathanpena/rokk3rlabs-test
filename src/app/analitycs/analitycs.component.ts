import { Component } from '@angular/core';

import { AnalitycsService } from './analitycs.service';

@Component({
  selector: 'analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.css']
})
export class AnalitycsComponent {

    public data: any;

    constructor(private analitycsService: AnalitycsService) {

        

    }

    ngOnInit() {

        this.analitycsService.getData().then(res => {
            console.log(res);
            this.data = res;
        }

    }

}