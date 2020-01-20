import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langtons-ant',
  templateUrl: './langtons-ant.component.html',
  styleUrls: ['./langtons-ant.component.css']
})
export class LangtonsAntComponent implements OnInit {

  // Cell data 
  data : {
    x : number,
    y : number,
    state : boolean
  }[][] = [];

  // Interval timer 
  timer : any;

  // Ant params 
  ant : {
    x : number,
    y : number,
    direction : string
  }

  constructor() { }

  ngOnInit() {

    // Populate cells 
    this.populateCells();

    // Start interval 
    this.play();

  }

  //
  // Populate cells 
  //
  populateCells(){
    // Clear data 
    this.ant = {
      x : 10,
      y : 20,
      direction : 'NORTH'
    }
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
          state : false 
        })
      }
      // Append row 
      this.data.push(row);
    }
  }

  //
  // Start interval timer 
  //
  play(){
    // Clear timer 
    clearInterval(this.timer);
    // Next step init 
    this.nextStep()
    // Start timer 
    this.timer = setInterval(() => {
      this.nextStep()
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
    this.populateCells();
    // Start timer 
    this.play();
  }

  //
  // Increement step i.e. update ant pos
  //
  nextStep(){
    // Find state of cell containing and 
    outer: for(let row of this.data){
      for(let cell of row){
        if((cell.x==this.ant.x) && (cell.y==this.ant.y)){
          // Check current cell state 
          if(!cell.state){
            // At a white square, turn 90° right, flip the color of the square, move forward one unit
            switch (this.ant.direction) {
              case 'NORTH': {
                this.ant.direction = 'EAST';
                this.ant.y++;
                break;
              }
              case 'EAST': {
                this.ant.direction = 'SOUTH';
                this.ant.x++;
                break;
              }
              case 'SOUTH': {
                this.ant.direction = 'WEST';
                this.ant.y--;
                break;
              }
              case 'WEST': {
                this.ant.direction = 'NORTH';
                this.ant.x--;
                break;
              }
            }
            cell.state = true;
          }else{
            // At a black square, turn 90° left, flip the color of the square, move forward one unit
            switch (this.ant.direction) {
              case 'NORTH': {
                this.ant.direction = 'WEST';
                this.ant.y--;
                break;
              }
              case 'WEST': {
                this.ant.direction = 'SOUTH';
                this.ant.x++;
                break;
              }
              case 'SOUTH': {
                this.ant.direction = 'EAST';
                this.ant.y++;
                break;
              }
              case 'EAST': {
                this.ant.direction = 'NORTH';
                this.ant.x--;
                break;
              }
            }
            cell.state = false;
          }
          break outer;
        }
      }
    }
  }

}
