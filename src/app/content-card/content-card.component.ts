import { Component, OnInit } from '@angular/core';
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  Games:ContentList=new ContentList();
  constructor() {
    this.Games.add({
      id:1,
      title:'acey-deucey',
      description:"Acey-deucey is a tables game, a family of board games that includes backgammon.",
      creator:"United States Navy",
      imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Acey-Duecey_Board_%2822870733353%29.jpg/1280px-Acey-Duecey_Board_%2822870733353%29.jpg",
      type:"board"
    })
    this.Games.add({
      id:2,
      title:'backgammon',
      description:"Backgammon is a two-player board game played with counters and dice on tables boards.",
      creator:"Mesopotamia and Persia",
      imgURL:"https://upload.wikimedia.org/wikipedia/commons/3/30/Backgammon_lg.png",
      type:"money and match play"
    })
    this.Games.add({
      id:3,
      title:'checkers',
      description:"Checkers is a group of strategy board games for two players which involve forward movements of uniform game pieces and mandatory captures by jumping over opponent pieces.",
      creator:"Anglophone countries",
      imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CheckersStandard.jpg/1920px-CheckersStandard.jpg",
      type:"10×10 board"
    })
  }
}
