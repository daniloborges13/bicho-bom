import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Route, CanLoad, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private storage: Storage, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
   return this.checkAccess();
}

canLoad(route: Route): Promise<boolean> {
  return this.checkAccess();
}

checkAccess(): Promise<any>{
   return new Promise((resolve, reject) => {

      this.storage.get('USER_INFO')
        .then((res) => {
          if (res) {
            resolve(true);
          } else {
            reject(false);
            this.router.navigate(['login']);
          }
        })
        .catch((err) => {
          reject(false);
          this.router.navigate(['login']);
        });

    });
}

}
