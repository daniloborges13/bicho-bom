import { LoginService } from './../../services/login/loginService';
import { AngularFireAuth } from '@angular/fire/auth';
import { DoacaoProvider } from './../../services/doacao/doacao';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CameraResultType, Plugins } from '@capacitor/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
const { Camera } = Plugins;

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  formDoacao: FormGroup;
  uploadPercent: any;
  downloadURL: any;
  imageUrl: any;
  user: any;
  imgPreview;

  constructor(
    private frmBuilder: FormBuilder,
    private doacaoPvd: DoacaoProvider,
    private angularFireStorage: AngularFireStorage,
    private loginSrv: LoginService,
    private router: Router

  ) { 
    this.loginSrv.user.subscribe((res) =>{
      this.user = res;
    })
  }

  ngOnInit() {
    this.formDoacao = this.frmBuilder.group({
      adotado: [false],
      user: [''],
      nomePet: ['', Validators.required],
      raca: ['', Validators.required],
      sexo: ['', Validators.required],
      tipoPet: ['', Validators.required],
      celular: ['', Validators.required],
      obs: ['', Validators.required],
      dataDoacao: [new Date()],
      urlFoto: ['', Validators.required]
    });
  }

   salvarDoacao() {
    if (this.formDoacao.valid) {
      this.formDoacao.get('user').setValue(this.user.uid);
      this.doacaoPvd.showLoading('Salvando Adoção ...');
      try {

        this.doacaoPvd.addDoacao(this.formDoacao.value)
        .then(()=>{
        console.log('deu bao dmais soo');
        this.router.navigate(['inicio']);
        this.formDoacao.reset();
        this.doacaoPvd.dismissLoading();
        this.doacaoPvd.toastMsg('Doação realizada com sucesso!');          
        })
        .catch((erro)=>{
          console.log(erro);
          this.doacaoPvd.dismissLoading();
          this.doacaoPvd.toastMsg('Erro ao realizar a doação');
        })

      } catch (erro) {
        console.log(erro);
        this.doacaoPvd.dismissLoading();
        this.doacaoPvd.toastMsg('Erro ao realizar a doação');
      }
    }
  }


  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  } 

public uploadFile(event: any): void {
  for (let i = 0; i < event.target.files.length; i++) {
    const file = event.target.files[i];
    const fileRef: AngularFireStorageReference = this.angularFireStorage.ref(
      file.name
    );
    const task: AngularFireUploadTask = this.angularFireStorage.upload(
      file.name,
      file
    );
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadURL => {
            
             this.formDoacao.get('urlFoto').setValue(downloadURL);
          });
        })
      )
      .subscribe();
  }
}
}


