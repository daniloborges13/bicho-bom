import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-minhaspub',
  templateUrl: './minhaspub.page.html',
  styleUrls: ['./minhaspub.page.scss'],
})
export class MinhaspubPage implements OnInit {

  bichos: Observable<any[]>
  constructor(private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private alertCtrl: AlertController) { }

  async ngOnInit() {
    const user = await this.afa.auth.currentUser
    this.bichos = this.afs.collection<any>('doacoes', ref => {
      console.log(this.afa.idToken);
      return ref.where('user', '==', user.uid);
    })
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };

        });
      }))
  }
   async removerPub(id: string){

    const confirm = await this.alertCtrl.create({
      
      message: 'Essa operação não pode ser desfeita! Deseja realmente excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: async () => {
            const doc = await this.afs.collection('perdidos').doc(id);
            await doc.delete();
            return;
          }
        }
      ]
    });
    confirm.present();
  }

}
