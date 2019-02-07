import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { environment   } from '../../environment/environment'
import { HttpServiceProvider } from '../../providers/http-service/http-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //private url: string = 'http://localhost:81/api_ionic'
  //private url: string = 'http://localhost:3456/v1'
  public url: string
  //public url: string = 'http://192.168.1.3:3456/v1' // linux de casa
  public beers: Array<{}>;
  constructor(public navCtrl: NavController, 
              private http: HttpServiceProvider) {
    
    this.url = environment.BASE_URL
    this.http.getAll( 'beers' )
             .subscribe( data => {
                     this.beers = data.results
                  })
  }
 
  getBeerInfo( id ){  
     /*Mudança de tela ou pagina */
    this.navCtrl.push(TestPage, {
       'beer_id' : id
    })
  }
  
    

}
