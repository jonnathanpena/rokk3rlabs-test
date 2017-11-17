import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnalitycsService {

  constructor(private http: HttpClient) {  }
  
  private extractData(res: any) {
    let body = res;
    console.log(body.data);
    return body.data || {};
  }

  getData() {
    return this.http.get < any > ('../assets/data/activity-data.json')
      .toPromise()
      .then(this.extractData);
  }

}