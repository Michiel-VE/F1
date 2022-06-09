import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceItemComponent } from './race-item.component';

describe('RaceItemComponent', () => {
  let component: RaceItemComponent;
  let fixture: ComponentFixture<RaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceItemComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceItemComponent);
    component = fixture.componentInstance;
    component.race = {
      id: 1,
      name: 'GP Monaco',
      lat: 52.012,
      lon: 1.0126,
      city: 'City',
      country: 'Monaco',
      date: new Date(),
      timezone: 'GTM+1',
      active: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
