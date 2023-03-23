import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
              private router:Router,
              private http:HttpClient) { }

  public  baseUrl = 'https://manufacturingenterprise-api.neuromonk.shreekakajimasale.com'


  // @ts-ignore
  apiCall( type: string, url: string, body= {}, header = {} ) {
    url = environment.apiEndpoint+url;

    //
    switch (type.toLowerCase()){
      case 'get': {
        return this.http.get(url, header).pipe(map(data => {

          return data
        }));
      }
      case 'post': {
        return this.http.post(url, body,header).pipe(map(data => {

          return data
        }));
      }
      case 'put': {
        return this.http.put(url, body);
      }
      case 'delete': {
        return this.http.delete(url);
      }
    }
  }

}
