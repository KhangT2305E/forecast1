import { HttpClient } from "@angular/common/http";
import {  Component } from "@angular/core";

@Component( {
    selector: 'app_features',
    templateUrl: 'features.component.html',
    styleUrls: ['features.component.css']
})

export class FeaturesComponent {

   time = 2023;
   temp = 23;
   humd = 1000;
   desc = "Hanoi";
   icon = "asdfaf";

    constructor (private http: HttpClient) {

    }

    datas: any[]  = [];

    ngOnInit() {
        this.getData();
    }

    getData(){
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        this.http.get<any>(url).subscribe(data => {
                    this.datas = data.list;
            });
        };
    }

