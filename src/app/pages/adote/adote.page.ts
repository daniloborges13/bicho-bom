import { Doacao } from './../../components/models/doacao';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-adote',
  templateUrl: './adote.page.html',
  styleUrls: ['./adote.page.scss'],
})
export class AdotePage implements OnInit {

  bichos: any;
  doacao: Doacao[];
  buscarCidade: string;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
   this.bichos = this.afs.collection<any>('doacoes', ref => {
      return ref.where('adotado', '==', false)
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
