import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 49, lng: 10}
  today: Date = new Date();
  @ViewChild(MapInfoWindow, {static: false}) infoWindow!: MapInfoWindow;

  races = [];
  infoContent = '';

  options = {
    mapTypeId: 'hybrid',
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    }
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getRaces();
  }

  private getRaces(): void {
    this.dataService.getRaces().subscribe(raceData => {
      this.races = raceData.MRData.RaceTable.Races;
    })
  }

  getPos(index: number): google.maps.LatLngLiteral {
    return {
      lat: +this.races[index]['Circuit']['Location']['lat'],
      lng: +this.races[index]['Circuit']['Location']['long']
    }
  }

  openInfo(marker: MapMarker, index: number) {
    this.infoContent = `
<div class="mt-2 flex flex-col items-center content-center w-full">
<h2 class="font-bold text-lg capitalize mb-2">Race: ${this.races[index]['round']} ${this.races[index]['Circuit']['circuitName']}</h2>
<h3 class="text-lg capitalize text-center">${this.races[index]['raceName']}</h3>
</div>
`
    this.infoWindow.open(marker)
  }

  checkDate(index: number) {
    let raceDateString: string = this.races[index]['date'];
    let raceTimeString: string = this.races[index]['time'];

    let raceDateYear = raceDateString.substring(0, 4);
    let raceDateMonth = raceDateString.substring(5, 7);
    let raceDateDay = raceDateString.substring(8, 10);

    let raceTimeHours = raceTimeString.substring(0, 2);
    let raceTimeMinutes = raceTimeString.substring(3, 5);
    let raceTimeSeconds = raceTimeString.substring(6, 8);

    let raceDate = new Date(+raceDateYear, +raceDateMonth, +raceDateDay, +raceTimeHours, +raceTimeMinutes, +raceTimeSeconds)

    return this.today.getTime() <= raceDate.getTime();


  }
}
