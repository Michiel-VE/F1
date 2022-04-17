import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRankingComponent } from './driver-ranking.component';

describe('DriverRankingComponent', () => {
  let component: DriverRankingComponent;
  let fixture: ComponentFixture<DriverRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverRankingComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRankingComponent);
    component = fixture.componentInstance;
    component.driver = {
      id: 1,
      team_id: 1,
      firstName: 'Valterri',
      lastName: 'Bottas',
      permanentNumber: '77',
      code: 'BOT',
      birthday: new Date('1989-08-28'),
      picture: '///',
      country: 'Finland',
      countryCode: 'FI',
      wins: '1',
      points: 8.0,
      penaltyPoints: 0,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
