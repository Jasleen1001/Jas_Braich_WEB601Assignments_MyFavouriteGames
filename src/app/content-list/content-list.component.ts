import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "../content-card/content-card.component";
@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent]
})
export class ContentListComponent {
  gamesArray: Content[] = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "An action-adventure game set in an open world where players explore the kingdom of Hyrule.",
      creator: "Nintendo",
      imgURL: "https://t3.gstatic.com/images?q=tbn:ANd9GcSO0-bXLKMPSHQECjZUuy4gbwdgmF-7sfhHQ0b59Q2nv8ZZiBzgHEu5mwDuVLBPf71rkB_zQA",
      type: "Action-Adventure",
      tags: ["Adventure", "Exploration", "Fantasy"]
    },
    {
      id: 2,
      title: "Fortnite",
      description: "A popular battle royale game where 100 players fight to be the last one standing.",
      creator: "Epic Games",
      imgURL: "https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
      type: "Battle Royale",
      tags: ["Multiplayer", "Shooter", "Survival"]
    },
    {
      id: 3,
      title: "Minecraft",
      description: "A sandbox game that allows players to build and explore virtual worlds made up of blocks.",
      creator: "Mojang",
      imgURL: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
      type: "Sandbox",
      tags: ["Creativity", "Building", "Exploration"]
    },
    {
      id: 4,
      title: "Assassin's Creed Valhalla",
      description: "An action role-playing game set in the Viking Age, where players control a Viking warrior.",
      creator: "Ubisoft",
      imgURL: "https://t0.gstatic.com/images?q=tbn:ANd9GcQo3TU14-X97X5wo1MBXugUxcaHkqzb5hbIXZVbArP1pX4wqXYUDvvzS7D-OG8mxJqH4e3U2A",
      type: "Action RPG",
      tags: ["Historical", "Stealth", "Open World"]
    },
    {
      id: 5,
      title: "Overwatch",
      description: "A team-based multiplayer first-person shooter with a diverse cast of heroes.",
      creator: "Blizzard Entertainment",
      
      type: "First-Person Shooter",
      tags: ["Team-based", "Competitive", "Heroes"]
    },
    {
      id: 6,
      title: "FIFA 22",
      description: "A football simulation game featuring realistic gameplay and various game modes.",
      creator: "EA Sports",
      imgURL: "https://t1.gstatic.com/images?q=tbn:ANd9GcRCuyzglHRUuYGcKd_8Ah3LEktsbAzPQqqDvALLOCRFIlIfB2FyZ2W_2IEtnjKnodqYoylPoQ",
      type: "Sports",
     
    }
  ];
  

  
}
