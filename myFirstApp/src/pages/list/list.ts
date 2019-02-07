import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { environment as ENV } from '../../environment/environment'
import { AuthProvider } from '../../providers/auth/auth';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  //public url: string = 'http://localhost:81/api_ionic'
  //public url: string = 'http://localhost:3456/v1'
  public url: string 
  //public url: string = 'http://192.168.1.3:3456/v1' // linux de casa
  beer = { name:  "",
           price: "", 
           type:  "",
           mark:  "",
           img:   ""
        };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController,
              public camera: Camera,
              public authService: AuthProvider) {
    this.url = ENV.BASE_URL
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
              }, (err) => {
                let toast = this.toastCtrl.create({
                    message: err.msg + ' log: '+ err.log,
                    duration: 3000
                });
                toast.present()
              })
    
  }



  getFoto(){
    const options: CameraOptions = {
        quality: 60, // qualidade aceita na api
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

    this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //console.log('img', imageData);
        //data:image/jpeg;base64,
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.beer.img = base64Image;
       }, (err) => {
        console.log(err);
        
       });
  }

  ionViewCanEnter(){
    
    return this.authService.userIsLogged()
  }
}
