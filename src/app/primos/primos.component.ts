import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  listaPrimos:Array<number>;
  _timer:any;
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

  totalPrimos:number = 0;
  limite:number = 30;
  reloj:number =25;
  nivel :number = 1;
  puntos: number = 0;

  //para cargar a los numeros primos en una lista
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
  
  
  subirDeNivel() {
      this.limite += 50;
      this.nivel++;
  }

  ngOnInit() {

  }

  constructor() 
  {
     
     this.inicializar();
     

   } 
   
    inicializar() {
      clearInterval(this._timer);
      this._timer = setInterval(() => this.contador(), 1000);
      this.totalPrimos = 0;
      //this.limite = 20;
      this.reloj =30;
      this.puntos =0; 
      this.listaPrimos = new Array<number>();
      this.cribaDeEratostenes(this.limite);
      this.listaAleatorios = new Array<number>();
      //this.estadoBotones = new Array<string>();
     
 
      for(let i = 0; i < 25; i++) {
           this.listaAleatorios.push(Math.floor(Math.random() * this.limite) + 1);
          // this.estadoBotones.push(this.listaAleatorios[i].toLocaleString());
          if(this.listaPrimos.indexOf(this.listaAleatorios[i])>=0){
            this.totalPrimos++;
          }
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


   
   contador(){
    //clearInterval(myVar);
      this.reloj--;
      if(this.reloj<=0){
        this.nivel = 1;
        this.limite = 20;
        this.puntos = 0 ;
        clearInterval(this._timer);
        alert("Se te acabo el tiempo");
        this.inicializar();
      }

  }
   

  
  presion(fila:number,columna:number) {
    if(this.listaPrimos.indexOf(this.posiciones[fila][columna]) >= 0) {
      this.estadoBotones[fila][columna] = "P"; 
      this.totalPrimos--;
      this.puntos += 10;
      
      if(this.totalPrimos == 0) {
          this.subirDeNivel();
          this.inicializar();
      }

    }
    else{
      this.estadoBotones[fila][columna] = "X"; 
      this.reloj -= 3; //los errores cuestan tiempo
    }
    
  }

}
