import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-shoes-item',
  templateUrl: './grid-shoes-item.component.html',
  styleUrls: ['./grid-shoes-item.component.sass']
})
export class GridShoesItemComponent implements OnInit {
  @Input() shoesList: Array<any> = []
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {}

  delete(id:string){
    this.deleteEmitter.emit(id)
  }

}
