import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {

    return new Promise((resolve, reject) => {

      this.storage.get('USER_INFO')
        .then((res) => {
          if (res) {
            reject(false);
            this.router.navigate(['inicio']);
          } else {
            resolve(true);
          }
        })
        .catch((err) => {
          resolve(true);
        });
    });
  }

}
