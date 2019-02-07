import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public beer: {}
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public http: HttpServiceProvider) {
    
    let id  = navParams.get('beer_id')
    this.http.get( 'beers', id )
             .subscribe( data => {
                 this.beer = data[0]
             })   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }



}
