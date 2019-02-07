
import { Injectable, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage'
import { ToastController, NavController, Nav, App } from 'ionic-angular';
import { HttpServiceProvider } from '../http-service/http-service';
import { HomePage } from '../../pages/home/home';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  @ViewChild(Nav) nav: Nav
  private msg: string = 'É preciso logar para acessar'
  
  constructor(public http: HttpServiceProvider,
              public storage: Storage,
              public toastCtrl: ToastController,
              private app: App ){
    console.log('Hello AuthProvider Provider');
  }

  login( credentials ){
      
      this.http.post('auth/login',credentials)
               .subscribe( (data) => {
                    if( data.error !== undefined ){
                      let toast = this.toastCtrl.create({
                        message: data.error,
                        duration: 3000
                      })
                      toast.present()
                    }else{
                      this.storage.set('token', data.token)
                      this.app.getActiveNav().setRoot( HomePage )
                    }

               }, error => {
                  let toast = this.toastCtrl.create({
                    message: error.error,
                    duration: 3000
                  })
                  toast.present()
                  
               }) 
  }

  userIsLogged(){
     return  this.storage.get('token')
        .then( val => {
           if( val  ){
              return val
           }
           else {
              let toast = this.toastCtrl.create({
                message: this.msg,
                duration: 3000
              })
              toast.present()
               return false  
           }
            
        })
        
        
  }


  logout(){
    this.storage.remove('token')
  }

}
