import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ToastController, LoadingController } from '@ionic/angular';
import { Perdidos } from 'src/app/components/models/perdidos';
import { Injectable } from '@angular/core';

@Injectable()
export class PerdidosProvider {

    private perdidosCollection: AngularFirestoreCollection;
    loading: any;

    constructor(
        public afs: AngularFirestore,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
    ) {
        this.perdidosCollection = afs.collection<Perdidos>('perdidos', ref => {
            return ref;
        });
    }

    addPerdidos(perdidos: Perdidos) {
        return this.perdidosCollection.add(perdidos);
    }

    async showLoading(msg: string) {
        if (!this.loading) {
          this.loading = await this.loadingCtrl.create({
            spinner: 'bubbles',
            message: msg,
            cssClass: 'custom-class custom-loading'
          });
          return await this.loading.present();
        }
      }

      async dismissLoading() {
        if (this.loading) {
          await this.loading.dismiss();
          this.loading = null;
        }
      }

      async toastMsg(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }
}
