import { DoacaoProvider } from './../../services/doacao/doacao';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  doacao: any = {};

  formDoacao: FormGroup;

  constructor(
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private afStorage: AngularFireStorage,
    private frmBuilder: FormBuilder,
    private doadaoPvd: DoacaoProvider

  ) { }

  

  ngOnInit() {
    this.formDoacao = this.frmBuilder.group({
      nomePet: ['', Validators.required],
      raca: ['', Validators.required],
      sexo: ['', Validators.required],
      tipoPet: ['', Validators.required],
      celular: ['', Validators.required],
      obs: ['', Validators.required],
      dataDoacao: [new Date()]
    })
  }

  salvarDoacao(){
    
    if(this.formDoacao.valid){
      this.doadaoPvd.addDoacao(this.formDoacao.value)
        .then(() => {
          console.log('deu bao dmais soo')
          this.formDoacao.reset();
          this.doadaoPvd.dismissLoading();
          this.doadaoPvd.toastMsg('Doação realizada com sucesso!')
        })
        .catch((erro) => {
          console.log(erro);
          this.doadaoPvd.dismissLoading();
          this.doadaoPvd.toastMsg('Erro ao realizar a doação');
        })
    }
  }


  async openGalery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    try{
      const fileUri: string = await this.camera.getPicture(options);

      let file: string;

      if (this.platform.is('ios')){
        file = fileUri.split('/').pop();
      } else {
        file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?') )
      }

      const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));

      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
      const blob: Blob = new Blob([buffer], {type: 'image/jpeg'});

      this.uploadPicture(blob);
    }catch(error){
      console.log(error)
    }
  }

  uploadPicture(blob: Blob){
    const ref = this.afStorage.ref('doacao/ionic.jpg');
    const task = ref.put(blob);
  }

}
