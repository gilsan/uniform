import { FileTransfer,FileUploadOptions,FileTransferObject } from '@ionic-native/file-transfer';
import { Component } from '@angular/core';
import { File} from '@ionic-native/file';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
  
 
@IonicPage()
@Component({
  selector: 'page-mgnimage',
  templateUrl: 'mgnimage.html',
})
export class Mgnimage {
   storageDirectory: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
      private transfer : FileTransfer,private file:File,
      private alertCtrl : AlertController,
      private platform: Platform
  ) {
      this.storageDirectory=this.file.dataDirectory;
  }

    downloadImage(image: string){
      this.platform.ready().then(
        ()=> {
              const fileTransfer: FileTransferObject = this.transfer.create();
              const imageLocation=`${this.file.applicationDirectory}www/assets/img/${image}`;
              console.log(imageLocation);
              console.log(this.storageDirectory+image);
              fileTransfer.download(imageLocation,this.storageDirectory+image)
                .then( (entry) => {
               const alertSuccess = this.alertCtrl.create({
                            title:`Download 성공`,
                            subTitle:`${image}가 ${entry.toURL()}`,
                            buttons:['OK']
                });
                alertSuccess.present();
               },
                (error) => {
                 const alertFail = this.alertCtrl.create({
                     title:`Download 실패`,
                     subTitle:`${image}가 ${error.code}`,
                     buttons:['OK']
                 });
                 alertFail.present();
                }); 
        });
    }  

    retrieveImage(image: string) {
      
      this.file.checkFile(this.storageDirectory,image)    
       .then( ()=> {
            const alertSuccess = this.alertCtrl.create({
              title:`Download 성공`,
              subTitle:`${image}가 ${this.storageDirectory} 에서 재생`,
              buttons:['OK']
            });
            alertSuccess.present();           
       },
         (error)=> {
            const alertFailure = this.alertCtrl.create({
               title: `File 가져오기 실패`,
               subTitle:`${image}를 가져오기 실패: ${error.code}`,
               buttons:['OK']
            });
            return alertFailure.present();
         });
      }


}
