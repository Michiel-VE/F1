import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { Race } from '../../interfaces/race';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 49, lng: 10 };
  today: Date = new Date();
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  races: Race[] = [];
  infoContent = '';

  options = {
    mapTypeId: 'hybrid',
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
    },
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getRaces();
  }

  private getRaces(): void {
    this.dataService.getRaces().subscribe((raceData: Race[]) => {
      this.races = raceData;
    });
  }

  getPos(index: number): google.maps.LatLngLiteral {
    return {
      lat: this.races[index].lat,
      lng: this.races[index].lon,
    };
  }

  openInfo(marker: MapMarker, index: number): void {
    this.infoContent = `
<div class="mt-2 flex flex-col items-center content-center w-full">
<h2 class="font-bold text-lg capitalize mb-2">Race: ${index + 1} ${this.races[index].name}</h2>
<h3 class="text-lg capitalize text-center">${this.races[index].city} &dash; ${this.races[index].country}</h3>
</div>
`;
    this.infoWindow.open(marker);
  }

  checkDate(index: number): boolean {
    const raceDateTemp: Date = this.races[index].date;
    const raceDate = new Date(raceDateTemp);


    return this.today <= raceDate;
  }
}
