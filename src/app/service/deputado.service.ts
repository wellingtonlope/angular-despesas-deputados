import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Deputado } from "../shared/deputado";

@Injectable()
export class DeputadoService {

  basePath = 'deputado/2017';

  constructor(
    private db: AngularFireDatabase
  ) { }

  getDeputado(id) {
    return this.db.object(this.basePath + '/' + id).snapshotChanges().map(item => {
      const data = item.payload.val() as Deputado
      data.id = item.payload.key
      return data
    })
  }

  getDeputados() {
    return this.db.list(this.basePath).snapshotChanges().map(itens => {
      return itens.map(item => {
        const data = item.payload.val() as Deputado
        data.id = item.payload.key
        return data
      })
    })
  }
}
