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
  estadoBotones:string[][] = [ 
      [" ", " ", " ", " ", " " ],
      [" ", " ", " ", " ", " " ],
      [" ", " ", " ", " ", " " ],
      [" ", " ", " ", " ", " " ],
      [" ", " ", " ", " ", " " ]
  ];
  posiciones:number[][] = [[0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0]];

  constructor() 
  {
     this.listaPrimos = new Array<number>();
     this.cribaDeEratostenes(250);
     this.listaAleatorios = new Array<number>();
     //this.estadoBotones = new Array<string>();
    

     for(let i = 0; i < 25; i++) {
          this.listaAleatorios.push(Math.floor(Math.random() * 200));
         // this.estadoBotones.push(this.listaAleatorios[i].toLocaleString());
     }
 
     let indice = 0;
     for(let i =0; i < 5; i++) {
        for(let j =0; j < 5; j++) {
           this.posiciones[i][j] = this.listaAleatorios[indice]; 
           this.estadoBotones[i][j] = this.listaAleatorios[indice].toLocaleString();
           indice++;
        }
     }


   } 

  
  presion(fila:number,columna:number) {
    if(this.listaPrimos.indexOf(this.posiciones[fila][columna]) >= 0) {
      this.estadoBotones[fila][columna] = "P"; 
    }
    else{
      this.estadoBotones[fila][columna] = "X"; 
    }
  }


  ngOnInit() {

  }

}
