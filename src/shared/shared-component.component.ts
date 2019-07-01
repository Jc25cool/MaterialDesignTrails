import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent implements OnInit {

  constructor() { }

  @Input()
  dropdownList;

  @Input()
  placeHolderInput;

   @Output() selectedItems: EventEmitter<Object[]> = new EventEmitter<Object[]>();
  // @Output() private numberGenerated = new EventEmitter<any>();

  selectedItemsList = [];


  dropdownSettings = {};
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    //this.selectedItemsList;
    //console.log("In Child",this.selectedItemsList);
    this.selectedItems.emit(this.selectedItemsList)
    //this.numberGenerated.emit(5);

  }
  onSelectAll(items: any) {
    // console.log(items);
    this.selectedItems.emit(this.selectedItemsList)
  }
  onItemDeSelect(item:any){
    //console.log("In Child", this.selectedItemsList);
    this.selectedItems.emit(this.selectedItemsList)
  }

}
