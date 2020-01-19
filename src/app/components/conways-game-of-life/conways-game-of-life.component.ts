import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conways-game-of-life',
  templateUrl: './conways-game-of-life.component.html',
  styleUrls: ['./conways-game-of-life.component.css']
})
export class ConwaysGameOfLifeComponent implements OnInit {

  // Cell data 
  data : {
    x : number,
    y : number,
    state : boolean
  }[][] = [];

  // Interval timer 
  timer : any;

  constructor() { }

  ngOnInit() {

    // Populate cells 
    this.randomize();

    // Start interval 
    this.play();

  }

  //
  // Populate cells with random data 
  //
  randomize(){
    // Clear data 
    this.data = [];
    // 20 rows
    for(var i=0;i<20;i++){
      // Generate row 
      let row : {
        x : number,
        y : number,
        state : boolean
      }[] = [];
      // 40 columns 
      for(var j=0;j<40;j++){
        // Add cell 
        row.push({
          x : i,
          y : j,
          state : (Math.random() >= 0.90) 
        })
      }
      // Append row 
      this.data.push(row);
    }
  }

  //
  // Increement generation i.e. update cell states
  //
  nextGeneration(){
    // Iterate over cells 
    this.data.forEach(
      row => {
        row.forEach(
          cell => {
            // Flag for live neighbour cell count 
            let s = 0;
            // Find surrounding state 
            if( (cell.x-1!=-1) && (cell.x+1!=20) && (cell.y-1!=-1) && (cell.y+1!=40)){
              if(this.data[cell.x-1][cell.y-1].state){
                s++;
              }
              if(this.data[cell.x-1][cell.y].state){
                s++;
              }
              if(this.data[cell.x-1][cell.y+1].state){
                s++;
              }
              if(this.data[cell.x][cell.y-1].state){
                s++;
              }
              if(this.data[cell.x][cell.y+1].state){
                s++;
              }
              if(this.data[cell.x+1][cell.y-1].state){
                s++;
              }
              if(this.data[cell.x+1][cell.y].state){
                s++;
              }
              if(this.data[cell.x+1][cell.y+1].state){
                s++;
              }
            }
            // Set new state 
            if(cell.state==true && (s==2 || s==3)){
              // Any live cell with two or three neighbors survives 
              cell.state = true;
            }else if(cell.state==false && s==3){
              // Any dead cell with three live neighbors becomes a live cell
              cell.state = true
            }else{
              // All other live cells die in the next generation. Similarly, all other dead cells stay dead
              cell.state = false;
            }
          }
        ) 
      }
    )
  }

  //
  // Start interval timer 
  //
  play(){
    // Clear timer 
    clearInterval(this.timer);
    // Next step init 
    this.nextGeneration()
    // Start timer 
    this.timer = setInterval(() => {
      this.nextGeneration()
    }, 1000);
  }

  //
  // Stop timer
  //
  pause(){
    // Clear timer 
    clearInterval(this.timer);
  }

  //
  // Restart new cluster
  //
  restart(){
    // Populate cells     
    this.randomize();
    // Start timer 
    this.play();
  }

}
