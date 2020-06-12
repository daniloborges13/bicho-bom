import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/loginService';
import { LoginPage } from '../login/login.page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {
  form: FormGroup;

  constructor(
    private toastCtrl: ToastController,
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async resetPassword() {
    if (this.form.valid) {
      const toast = await this.toastCtrl.create({
        message: 'Sua solicitação foi enviada ao seu email',
        duration: 3000,
        position: 'bottom',
      });
      this.loginService
        .resetPassword(this.form.get('email').value)
        .then(() => {
          this.router.navigate['/login'];
        })
        .catch((error: any) => {
          if (error.code === 'auth/invalid-email') {
            alert('O e-mail digitado não é valido.');
          } else if (error.code === 'auth/user-not-found') {
            alert('O usuário não foi encontrado.');
          }

          toast.present();
        });
    }
  }

  login() {
    this.router.navigate['/login'];
  }
}
