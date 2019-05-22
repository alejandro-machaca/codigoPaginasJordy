import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public strTitulo: string;
  public strSubTitulo1: string;
  public strSubTitulo2: string;

  constructor() { 
    //this.strTitulo = "Realización de jardines y plantación";
    this.strTitulo = "Poda de palmeras y pinos";
    this.strSubTitulo1 = "Mantenimiento, tratamientos fitosanitarios y puesta a punto de jardines.";
    this.strSubTitulo2 = "Palma de mallorca Islas Baleares";
  }

  ngOnInit() {
  }

  scroll(divElemento) {
    var divEle = document.getElementById(divElemento);
    divEle.scrollIntoView({block: "start",behavior: "smooth"});
  } 

}
