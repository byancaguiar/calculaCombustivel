import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public gasolina:string;
  public  etanol:string;
  public calculo:string;
  public resultado:number;

  calculoCombustivel(){
    let alcool = parseFloat(this.etanol)
    let gas = parseFloat(this.gasolina);
    this.resultado = alcool/gas;

    if (this.resultado<0.7){
      this.calculo = "Etanol é Melhor";
    }else
    this.calculo = "Gasolina é Melhor";
  }

  constructor(public navCtrl: NavController) {

  }

}
