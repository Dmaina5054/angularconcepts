import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CovidgetterService } from '../../covidgetter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Consume api Angular'
  summaries: any; //data holder for returned items
  // We use this trigger because fetching the list of summaries can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

//injecting the service into our constructor
constructor(private httpService: CovidgetterService) {

}
ngOnInit() {

  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 2
  }
  //when component loaded
  //please fetch data from api
  this.httpService.getSummaries().subscribe(
    //set response results to summaries array
    (res) => {
      this.summaries = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
      //console.log(res)
      console.log(this.summaries.Countries)
    },
    //handle error
    (error) => {
      console.log(error);
    }
  )
}

}
