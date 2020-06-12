import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Perdidos } from 'src/app/components/models/perdidos';

@Component({
  selector: 'app-procurarperdidos',
  templateUrl: './procurarperdidos.page.html',
  styleUrls: ['./procurarperdidos.page.scss'],
})
export class ProcurarperdidosPage implements OnInit {

  perdidos: any;
  buscarCidade: string;
  perdido: Perdidos[];

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
