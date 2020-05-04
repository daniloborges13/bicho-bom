import { DoacaoProvider } from './../../services/doacao/doacao';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CameraResultType, Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {
  doacao: any = {};
  formDoacao: FormGroup;

  constructor(
    private fireStorage: AngularFireStorage,
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
    });
  }

  async salvarDoacao() {
    if (this.formDoacao.valid) {
      try {
        await this.doadaoPvd.addDoacao(this.formDoacao.value);
        console.log('deu bao dmais soo');
        this.formDoacao.reset();
        this.doadaoPvd.dismissLoading();
        this.doadaoPvd.toastMsg('Doação realizada com sucesso!');
      } catch (erro) {
        console.log(erro);
        this.doadaoPvd.dismissLoading();
        this.doadaoPvd.toastMsg('Erro ao realizar a doação');
      }
    }
  }

  async openGalery() {
    const options = {
      quality: 90,
      resultType: CameraResultType.Base64
    };

    const photo = await Camera.getPhoto(options);
    const time = (new Date()).getTime();
    const fileName = time + '.jpeg';

    const uploaded = await this.fireStorage.upload(`doacao/${fileName}`, this.b64toBlob(photo.base64String, 'image/jpeg'));
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
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
}
