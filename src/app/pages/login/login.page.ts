import { Component, ViewChild } from '@angular/core';
import { User } from 'src/app/components/models/model';
import { NgForm } from '@angular/forms';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/loginService';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user: User = new User();
  @ViewChild('form', { static: true }) form: NgForm;
  loading: HTMLIonLoadingElement;

  constructor(
    public navCtrl: NavController,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController,
    private loginService: LoginService,
    private router: Router,
    private storage: Storage
  ) { }



  async signIn() {
    await this.showLoading();
    if (this.form.form.valid) {
      this.loginService.signIn(this.user)
        .then((data) => {
          this.storage.set('USER_INFO', JSON.stringify(data.user))
            .then((res) => {
              this.router.navigate(['inicio']);
              this.dismissLoading();
            })
            .catch((err) => {
              this.dismissLoading();
            });
        })
        .catch((error: any) => {
          this.dismissLoading();
          if (error.code == 'auth/invalid-email') {
            this.toast('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            this.toast('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            this.toast('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            this.toast('A senha digitada não é valida.');
          } else {
            this.toast('Você está off-line.');
          }
        });
    }
  }

  async showLoading() {
    if (!this.loading) {
      this.loading = await this.loadCtrl.create({
        message: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box">
            <p>Carregando ...</p>
            </div>
          </div>`
      });
    }
    this.loading.present();
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  async toast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }
}
