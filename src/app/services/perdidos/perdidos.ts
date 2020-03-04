import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ToastController } from '@ionic/angular';
import { Perdidos } from 'src/app/components/models/perdidos';
import { Injectable } from '@angular/core';

@Injectable()
export class PerdidosProvider{
    
    private perdidosCollection: AngularFirestoreCollection;
    loading: any;

    constructor(
        public afs: AngularFirestore,
        private toastCtrl: ToastController
    ){
        this.perdidosCollection = afs.collection<Perdidos>('perdidos', ref => {
            return ref;
        });
    }
   

    addPerdidos(perdidos: Perdidos) {
        return this.perdidosCollection.add(perdidos);
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