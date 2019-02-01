import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  //public url: string = 'http://localhost:8000'
  public url: string = 'http://192.168.137.1:81/api_ionic'
  beer = {name:  "",
         price: "", 
         type:  "",
         mark:  "",
         img: ""
        };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController,
              public camera: Camera) {
    
  }
  saveBeer(beer){
     let headers = new Headers()
         headers.append('Content-Type', 'application/json')
     let options = new RequestOptions({headers: headers})    
     this.http.post( this.url + '/beers', beer, options )
              .map( res =>  res.json()  )
              .subscribe( (data) => {        
                  let toast = this.toastCtrl.create({
                      message: data.msg,
                      duration: 3000
                  });
                  toast.present()
              } )
    
  }

  getFoto(){
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

    this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.beer.img = base64Image;
       }, (err) => {
        console.log(err);
        
       });
  }
}
