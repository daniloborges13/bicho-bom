import { LoginService } from './../../services/login/loginService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  dadosUser: any = [];

  constructor(private user: LoginService) {
    
  }

  ngOnInit() {
  }

}
