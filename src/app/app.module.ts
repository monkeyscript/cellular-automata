import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

import { LangtonsAntComponent } from './components/langtons-ant/langtons-ant.component';
import { ConwaysGameOfLifeComponent } from './components/conways-game-of-life/conways-game-of-life.component';

@NgModule({
  declarations: [
    AppComponent,
    LangtonsAntComponent,
    ConwaysGameOfLifeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
