import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/loginService';
import { ToastController, NavController } from '@ionic/angular';
import { User } from 'src/app/components/models/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  user: User = new User();
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private loginService: LoginService,
    private router: Router
  ) {}

  createAccount() {
    if (this.user.password !== this.user.rePassword && this.form.form.invalid) {
      this.toast('Os campos Senha não correspondem!');
    } else if (this.form.form.valid) {
      this.loginService
        .createUser(this.user)
        .then((credential) => {
          credential.user.sendEmailVerification();
          this.toast('Usuário criado com sucesso.');
          this.router.navigate(['/login']);
        })
        .catch((error: any) => {
          if (error.code === 'auth/email-already-in-use') {
            this.toast('O e-mail digitado já está em uso.');
          } else if (error.code === 'auth/invalid-email') {
            this.toast('O e-mail digitado não é valido.');
          } else if (error.code === 'auth/operation-not-allowed') {
            this.toast('Usuário não autorizado a criar contas.');
          } else if (error.code === 'auth/weak-password') {
            this.toast('A senha digitada é muito fraca.');
          }
        });
    }
  }

  async toast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  login() {
    this.router.navigate['/login'];
  }
}
