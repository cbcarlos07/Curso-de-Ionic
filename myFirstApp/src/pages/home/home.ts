import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment   } from '../../environment/environment'
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
  constructor(public navCtrl: NavController, private http: Http, private toastCtrl: ToastController) {
    
    this.url = environment.BASE_URL
    this.http.get(this.url + '/beers')
             .map( res => res.json() )
             .subscribe( data => {
                this.beers = data.results;
             }, err => {
                let toastCtrl = this.toastCtrl.create({
                  message: err.log,
                  duration: 3000
                })
                toastCtrl.present()
             })
  }
 
  getBeerInfo( id ){  
     /*Mudança de tela ou pagina */
    this.navCtrl.push(TestPage, {
       'beer_id' : id,
       'api_url' : this.url
    })
  }
  
    

}
