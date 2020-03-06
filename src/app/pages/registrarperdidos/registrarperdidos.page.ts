import { PerdidosProvider } from './../../services/perdidos/perdidos';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrarperdidos',
  templateUrl: './registrarperdidos.page.html',
  styleUrls: ['./registrarperdidos.page.scss'],
})
export class RegistrarperdidosPage implements OnInit {

  formPerdidos: FormGroup;

  constructor(
    private frmBuilder: FormBuilder,
    private pvdPerdidos: PerdidosProvider,
  ) { }

  ngOnInit() {
    this.formPerdidos = this.frmBuilder.group({
      nomePet: ['', Validators.required],
      proprietario: ['', Validators.required],
      celular: ['', Validators.required],
      obs: ['', Validators.required],
      dataPerdido: [new Date()]
    })
  }


  salvarPerdidos(){
    if(this.formPerdidos.valid){
      this.pvdPerdidos.addPerdidos(this.formPerdidos.value)
      .then(() => {
        console.log('grazaDEUS td certo')
        this.formPerdidos.reset();
        this.pvdPerdidos.dismissLoading();
        this.pvdPerdidos.toastMsg('Animal perdido salvo com sucesso!');
      })
      .catch((error) =>{
        console.log('algo de errado nao esta certo')
        this.pvdPerdidos.dismissLoading();
        this.pvdPerdidos.toastMsg('Erro ao cadastrar animal perdido!');
      })
    
    }
  }



}
