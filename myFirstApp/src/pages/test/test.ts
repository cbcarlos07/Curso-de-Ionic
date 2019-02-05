import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

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
              public http: Http) {
    let url = navParams.get('api_url')  
    let id  = navParams.get('beer_id')
    this.http.get(url + '/beers/'+id)
      .map( res => res.json() )
      .subscribe( data => {
        this.beer = data[0];
    })
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }



}
