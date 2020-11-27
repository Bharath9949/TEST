import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { States } from '../states'

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http : HttpClient) { }
  
  getData() : Observable<States[]>{

    const url : string = "./data.json"
    return this.http.get<any>(url)
  }

}
