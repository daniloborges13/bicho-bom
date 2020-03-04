import { ToastController, LoadingController } from '@ionic/angular';
import { Doacao } from './../../components/models/doacao';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class DoacaoProvider {

    private doacaoCollection: AngularFirestoreCollection<Doacao>;
    loading: any;


    constructor(
        public afs: AngularFirestore,
        private toastCtrl: ToastController,
    ){
        this.doacaoCollection = afs.collection<Doacao>('doacoes', ref => {
            return ref;
        });
    }

    addDoacao(doacao: Doacao) {
        return this.doacaoCollection.add(doacao);
    }



    dismissLoading() {
        if (this.loading) {
          this.loading.dismiss();
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