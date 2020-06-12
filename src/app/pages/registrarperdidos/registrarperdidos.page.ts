import { PerdidosProvider } from './../../services/perdidos/perdidos';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/loginService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarperdidos',
  templateUrl: './registrarperdidos.page.html',
  styleUrls: ['./registrarperdidos.page.scss'],
})
export class RegistrarperdidosPage implements OnInit {

  formPerdidos: FormGroup;
  uploadPercent: any;
  downloadURL: any;
  imageUrl: any;
  user: any;
  imgPreview;

  constructor(
    private frmBuilder: FormBuilder,
    private angularFireStorage: AngularFireStorage,
    private loginSrv: LoginService,
    private router: Router,
    private perdidosPvd: PerdidosProvider,
   
  ) { 
    this.loginSrv.user.subscribe((res) =>{
      this.user = res;
    })
  }

  ngOnInit() {
    this.formPerdidos = this.frmBuilder.group({
      perdido: [true],
      user: [''],
      nomePet: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      celular: ['', Validators.required],
      obs: ['', Validators.required],
      dataPerdido: [new Date()],
      urlFoto: ['', Validators.required]
    })
  }

  salvarPerdidos(){
    if (this.formPerdidos.valid) {
      this.formPerdidos.get('user').setValue(this.user.uid);
      this.perdidosPvd.showLoading('Salvando Adoção ...');
      try {

        this.perdidosPvd.addPerdidos(this.formPerdidos.value)
        .then(()=>{
        console.log('deu bao dmais soo');
        this.router.navigate(['inicio']);
        this.formPerdidos.reset();
        this.perdidosPvd.dismissLoading();
        this.perdidosPvd.toastMsg('Animal perdido salvo com sucesso!');          
        })
        .catch((erro)=>{
          console.log(erro);
          this.perdidosPvd.dismissLoading();
          this.perdidosPvd.toastMsg('Erro ao tentar salvar animal perdido');
        })

      } catch (erro) {
        console.log(erro);
        this.perdidosPvd.dismissLoading();
        this.perdidosPvd.toastMsg('Erro ao tentar salvar animal perdido');
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
            
             this.formPerdidos.get('urlFoto').setValue(downloadURL);
          });
        })
      )
      .subscribe();
  }
}



}
