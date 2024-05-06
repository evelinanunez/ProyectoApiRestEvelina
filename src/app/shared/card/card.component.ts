import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @Input()
  title : string = '';

  @Input()
  gender : string= '';

  @Input()
  species : string= ''; 

  @Input()
  image : string= '';

  @Input()
  content : string ='';
 
  @Input()
  data : Object = {};

  @Input()
  bgColor = 'text-bg-light';


  @Input()
  bgColorButton : string = '';
  @Output()
  seeCharacter = new EventEmitter();
}
