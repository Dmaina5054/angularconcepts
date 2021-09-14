import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidgetterService {
  private url = 'https://api.covid19api.com/summary'

  constructor(private http: HttpClient) {

   }

   //define method to fetch covid summaries
   getSummaries() {
     return this.http.get(this.url);
   }

}

