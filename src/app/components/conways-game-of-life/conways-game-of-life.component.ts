import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conways-game-of-life',
  templateUrl: './conways-game-of-life.component.html',
  styleUrls: ['./conways-game-of-life.component.css']
})
export class ConwaysGameOfLifeComponent implements OnInit {

  // Cell data 
  data : {
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
        state : boolean
      }[] = [];
      // 40 columns 
      for(var j=0;j<40;j++){
        // Add cell 
        row.push({
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
    // Temp array for cloning 
    let tempArr = JSON.parse(JSON.stringify(this.data))
    // Iterate over cells 
    for(let i=0;i<this.data.length;i++){
      for(let j=0;j<this.data[i].length;j++){
        // Flag for live neighbour cell count 
        let s = 0;
        // Find surrounding state 
        if( (i-1!=-1) && (i+1!=20) && (j-1!=-1) && (j+1!=40)){
          if(this.data[i-1][j-1].state){
            s++;
          }
          if(this.data[i-1][j].state){
            s++;
          }
          if(this.data[i-1][j+1].state){
            s++;
          }
          if(this.data[i][j-1].state){
            s++;
          }
          if(this.data[i][j+1].state){
            s++;
          }
          if(this.data[i+1][j-1].state){
            s++;
          }
          if(this.data[i+1][j].state){
            s++;
          }
          if(this.data[i+1][j+1].state){
            s++;
          }
        }
        // Set new state 
        if(this.data[i][j].state==true && (s==2 || s==3)){
          // Any live cell with two or three neighbors survives 
          tempArr[i][j].state = true;
        }else if(this.data[i][j].state==false && s==3){
          // Any dead cell with three live neighbors becomes a live cell
          tempArr[i][j].state = true
        }else{
          // All other live cells die in the next generation. Similarly, all other dead cells stay dead
          tempArr[i][j].state = false;
        }
      }
    }
    // Copy back 
    this.data = tempArr;
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
