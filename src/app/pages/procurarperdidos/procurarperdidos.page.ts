import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-procurarperdidos',
  templateUrl: './procurarperdidos.page.html',
  styleUrls: ['./procurarperdidos.page.scss'],
})
export class ProcurarperdidosPage implements OnInit {

  perdidos: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
   this.perdidos = this.afs.collection<any>('perdidos', ref => {
      return ref.where('perdido', '==', true)
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

}
