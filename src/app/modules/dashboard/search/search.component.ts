import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  search = new FormControl("")
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  sendSearch(){
    this.searchEmitter.emit(this.search.value)
  }

}
