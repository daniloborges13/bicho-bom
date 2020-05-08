import { ToastController, LoadingController } from '@ionic/angular';
import { Doacao } from './../../components/models/doacao';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class DoacaoProvider {

    private doacaoCollection: AngularFirestoreCollection<Doacao>;
    loading: any;

    constructor(
        public afs: AngularFirestore,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
    ) {
        this.doacaoCollection = afs.collection<Doacao>('doacoes', ref => {
            return ref;
        });
    }

    addDoacao(doacao: Doacao) {
        return this.doacaoCollection.add(doacao);
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
