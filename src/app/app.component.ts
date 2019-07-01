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

  divOneContent = ['Content 1','Content 2', 'Content 3', 'Content 4'];
  divTwoContent = ['Content 5','Content 6', 'Content 7', 'Content 8']

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

  drop(ev) {
    ev.preventDefault();
    let flag = false;
    var data = ev.dataTransfer.getData("text");
    //console.log(document.getElementById(data).firstElementChild.innerHTML)
    var dataContent= document.getElementById(data).firstElementChild.innerHTML.trim();
    console.log(dataContent);

    let indexPostionOne= this.divOneContent.indexOf(dataContent);
    let indexPostionTwo = this.divTwoContent.indexOf(dataContent);

    console.log(indexPostionOne, indexPostionTwo)

    if(indexPostionOne == -1){
      this.divOneContent.push(dataContent);
      this.divTwoContent.splice(indexPostionTwo,1);
    }
    else if(indexPostionTwo == -1){
       this.divTwoContent.push(dataContent);
      this.divOneContent.splice(indexPostionOne,1);
    }

    // this.divOneContent.forEach((item, index)=>{
    //   if(item.indexOf(dataContent) != -1){
    //     this.divTwoContent.push(data);
    //     this.divOneContent.splice(index,1);
    //     flag= true;
    //   }
    // })

    // if(flag == false){
    //   this.divTwoContent.forEach((item, index)=>{
    //   if(item.indexOf(dataContent) != -1){
    //     this.divOneContent.push(data);
    //     this.divTwoContent.splice(index,1);
    //   }
    // })
    // }



    //ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}


