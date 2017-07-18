import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,
  LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UniformService } from '../../../services/uniform.service';
 
@IonicPage()
@Component({
  selector: 'page-uniform',
  templateUrl: 'uniform.html',
})
export class Uniform {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uniformService: UniformService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) {
  }

  onUniform(f:NgForm) {
     const toast=this.toastCtrl.create({
        message:'입력 되었습니다.',
        duration: 5000
     });
     const loading=this.loadingCtrl.create({
      content: '진행중.....'
    });
    loading.present();
    this.uniformService.addUniform(     
        f.value.depart,
        f.value.name ,
        f.value.grade ,
        f.value.neck ,
        f.value.breath ,
        f.value.sholder ,
        f.value.wrist ,
        f.value.reach ,
        f.value.waist,
        f.value.heap ,
        f.value.gijang
      )
      .subscribe( (data)=> {
        if(data == "OK") {
          toast.present();
          loading.dismiss();
        //  console.log('입력성공');
          f.reset();
          toast.dismiss();
          
        }
      },
      (err)=> {toast.dismiss();}
      )
  }

}
