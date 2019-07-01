import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularPlugins';
  marketPlaceHolderData ="Select Market";
  stationPlaceHolderData ="Select Station";

  marketDropdownList= [];

  stationDropdownList =[];
  
  ngOnInit(){
    setTimeout(()=>{
      this.marketDropdownList = [
      { item_id: 1, item_text: 'Mumbaiss' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    console.log("called on Pageload")
    }, 2000) 
    
  }
  listOfSelectedMarkets(e){
    // console.log("kjghj")
    setTimeout(()=>{
      this.stationDropdownList = [
      { item_id: 1, item_text: 'Mumbais' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    console.log("called when first list is loaded")
    }, 2000) 
  }

  listOfSelectedStations(e){
    // console.log("kjghj")
    console.log("Just Send the data")
  }
}


