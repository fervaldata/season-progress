import { Component, OnInit } from '@angular/core';
import { Season } from '../models/season';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  private Seasons = new Array<Season>();
  public currentSeason = new Season();
  public totalDaysSeason!: number;
  public currentDay!: number;
  public daysToFinish!: number;
  public totalProgress!: number;

  constructor() { }

  ngOnInit(): void {

    this.setSeasons();
    this.getProgress();




  }

  setSeasons(){

    var currentDate = new Date();

    this.Seasons = 
    [
    {StartSeason: new Date(currentDate.getFullYear().toString() + "/3/20"),  EndSeason: new Date(currentDate.getFullYear().toString() + "/6/21"), SeasonName: "Otoño" },
    {StartSeason: new Date(currentDate.getFullYear().toString() + "/6/21"),  EndSeason: new Date(currentDate.getFullYear().toString() + "/9/22"), SeasonName: "Invierno"},
    {StartSeason: new Date(currentDate.getFullYear().toString() + "/9/22"),  EndSeason: new Date(currentDate.getFullYear().toString() + "/12/21"), SeasonName: "Primavera"},
    {StartSeason: new Date(currentDate.getFullYear().toString() + "/12/21"), EndSeason: new Date((currentDate.getFullYear() + 1).toString() + "/3/20"), SeasonName: "Verano"}
    ];
 


  }

  getProgress(){
  
    var currentDate = new Date();
    this.currentSeason = this.Seasons.find(x => currentDate >= x.StartSeason && currentDate <= x.EndSeason) || new Season();

    this.totalDaysSeason = Math.ceil((this.currentSeason.EndSeason.getTime() - this.currentSeason.StartSeason.getTime()) / (1000 * 3600 * 24));
    this.currentDay = Math.ceil(Math.abs(<any>currentDate - <any>this.currentSeason.StartSeason) / (1000 * 60 * 60 * 24));
    this.daysToFinish = Math.ceil(Math.abs(<any>this.currentSeason.EndSeason - <any>currentDate) / (1000 * 60 * 60 * 24));
    this.totalProgress = Math.round((this.currentDay * 100 / this.totalDaysSeason) * 10) / 10;



  }

  
}
