import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage'
import 'rxjs/add/operator/map'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http,
              public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  login( credentials ){
      let url = 'http://localhost:3456/v1/auth/login'      
      let headers = new Headers()
      headers.append('Content-Type','application/json')
      let options = new RequestOptions({headers: headers})
      this.http.post(url, credentials, options )
               .map( res => res.json() )
               .subscribe( (data) => {
                    this.storage.set('token', data.token)
               }) 
  }

  userIsLogged(){
    this.storage.get('token')
        .then( val => {
           if( val !== undefined )
            return val
           else 
            return false 
        })
  }

  logout(){
    this.storage.remove('token')
  }

}
