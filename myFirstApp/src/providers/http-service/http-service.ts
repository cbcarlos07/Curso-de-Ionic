import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environment/environment'
import { Http, RequestOptions, Headers } from '@angular/http';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  private url: string = ENV.BASE_URL
  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getAll( endpoint ){
     return this.http.get(`${this.url}/${endpoint}`)
                .map( res => res.json() )

  }

  get(endpoint, id){     
     return this.http.get( `${this.url}/${endpoint}/${id}` )
                .map( res => res.json() )    
         
  } 
  post(endpoint, resource){
      let headers = new Headers()
          headers.append('Content-Type', 'application/json')
      let options = new RequestOptions({headers: headers})
   return  this.http.post(`${this.url}/${endpoint}`, resource, options)
               .map( res => res.json() )     
  }

  

}
