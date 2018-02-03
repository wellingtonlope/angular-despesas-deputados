import { Component, OnInit } from '@angular/core';
import { DeputadoService } from "../service/deputado.service";
import { Deputado } from "../shared/deputado"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deputados: Deputado[] = [];

  constructor(private deputadoService: DeputadoService) { }

  ngOnInit() {
    this.deputadoService.getDeputados().subscribe(itens => {
      this.deputados = itens
    });
  }

}
