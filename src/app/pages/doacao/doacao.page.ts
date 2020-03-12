import { DoacaoProvider } from './../../services/doacao/doacao';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Capacitor, Plugins, CameraResultType, FilesystemDirectory, Filesystem, Camera } from '@capacitor/core';



@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  
 
  doacao: any = {};

  formDoacao: FormGroup;

  constructor(
    private platform: Platform,
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

    const options = {
      resultType: CameraResultType.Uri
    };

    Camera.getPhoto(options).then(
      photo => {
        Filesystem.readFile({
          path: photo.path
        }).then(
          result => {
            let date = new Date(),
              time = date.getTime(),
              fileName = time + ".jpeg";

            Filesystem.writeFile({
              data: result.data,
              path: fileName,
              directory: FilesystemDirectory.Data
            }).then(
              () => {
                Filesystem.getUri({
                  directory: FilesystemDirectory.Data,
                  path: fileName
                }).then(
                  result => {
                    let path = Capacitor.convertFileSrc(result.uri);
                    console.log(path);
                  },
                  err => {
                    console.log(err);
                  }
                );
              },
              err => {
                console.log(err);
              }
            );
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}
