import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/loginService';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private loginSrv: LoginService, private storage: Storage, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.loginSrv.signOut().then(() => {
      this.storage.clear().then(() => {
        this.router.navigate(['login'])
      }).catch((err)=>{

      })
    }).catch((err)=>{

    })
  }
}
