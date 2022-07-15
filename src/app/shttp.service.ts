import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShttpService {
  constructor(private shttp: HttpClient) { }
  url = 'http://localhost:3000/';
  postapi(options?:any){
    return this.shttp.post(this.url + 'api',options);
  }
}
