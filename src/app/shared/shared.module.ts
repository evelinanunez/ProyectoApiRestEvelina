import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports:[
    CardComponent,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
