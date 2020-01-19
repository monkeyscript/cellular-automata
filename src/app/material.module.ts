import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule
  ]
})

export class MaterialModule {}