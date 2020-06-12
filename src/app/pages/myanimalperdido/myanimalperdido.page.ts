import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-myanimalperdido',
  templateUrl: './myanimalperdido.page.html',
  styleUrls: ['./myanimalperdido.page.scss'],
})
export class MyanimalperdidoPage implements OnInit {
  perdidos: Observable<any[]>;
  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    const user = await this.afa.currentUser;
    this.perdidos = this.afs
      .collection<any>('perdidos', (ref) => {
        console.log(this.afa.idToken);
        return ref.where('user', '==', user.uid);
      })
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
  async removerPub(id: string) {
    const confirm = await this.alertCtrl.create({
      message: 'Essa operação não pode ser desfeita! Deseja realmente excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {},
        },
        {
          text: 'Sim',
          handler: async () => {
            const doc = await this.afs.collection('perdidos').doc(id);
            await doc.delete();
            return;
          },
        },
      ],
    });
    confirm.present();
  }
}
