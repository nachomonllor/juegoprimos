import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  listaPrimos:Array<number>;

  cribaDeEratostenes(n:number) {
      let primos = new Array<Boolean>();
      for(let i =0; i<n; i++) {
         primos.push(true);
      }

      for(let p = 2; p*p <= n; p++) 
      { 
            if(primos[p] == true) 
            { 
                for(let i = p * p; i <= n; i += p) 
                    primos[i] = false; 
            } 
      } 

      for(let i = 2; i <= n; i++) 
      { 
          if(primos[i] == true)  {
              //Console.Write(i + " "); 
              this.listaPrimos.push(i);
          }
      } 

  }
  
  listaAleatorios: Array<number>;
  constructor() 
  {
     this.listaPrimos = new Array<number>();
     this.cribaDeEratostenes(250);
     this.listaAleatorios = new Array<number>();

     for(let i = 0; i < 25; i++) {
          this.listaAleatorios.push(Math.floor(Math.random() * 200));
     }
     this.estadoBoton0 = this.listaAleatorios[0].toLocaleString();
     this.estadoBoton1 = this.listaAleatorios[1].toLocaleString();
     this.estadoBoton2 = this.listaAleatorios[2].toLocaleString();
     
   }

   estadoBoton0:string;
   estadoBoton1:string;
   estadoBoton2:string;
   presionar0() {
      //this.estadoBoton0 = this.listaAleatorios[0].toLocaleString();
      if(this.listaPrimos.indexOf(this.listaAleatorios[0]) >=0){
         // console.log("es primo");
         this.estadoBoton0 ="P";
      }
      else{
        //console.log("no es primo");
        this.estadoBoton0 ="*";
      }
      
   }
   presionar1() {
    //this.estadoBoton0 = this.listaAleatorios[0].toLocaleString();
    if(this.listaPrimos.indexOf(this.listaAleatorios[1]) >=0){
       // console.log("es primo");
       this.estadoBoton1 ="P";
    }
    else{
      //console.log("no es primo");
      this.estadoBoton1 ="*";
    }
    
 }
 
 presionar2() {
  //this.estadoBoton0 = this.listaAleatorios[0].toLocaleString();
  if(this.listaPrimos.indexOf(this.listaAleatorios[2]) >=0){
     // console.log("es primo");
     this.estadoBoton2 ="P";
  }
  else{
    //console.log("no es primo");
    this.estadoBoton2 ="*";
  }
  
}
 
   


  ngOnInit() {

  }

}
