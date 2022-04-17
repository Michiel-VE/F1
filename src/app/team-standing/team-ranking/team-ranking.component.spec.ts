import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRankingComponent } from './team-ranking.component';

describe('TeamRankingComponent', () => {
  let component: TeamRankingComponent;
  let fixture: ComponentFixture<TeamRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamRankingComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRankingComponent);
    component = fixture.componentInstance;
    component.team = {
      id: 1,
      name: 'Alfa Romeo Racing',
      picture: '/assets/drivers/alfa_romeo_racing.webp',
      origin: 'Switzerland',
      drivers: [
        {
          id: 1,
          team_id: 1,
          firstName: 'Valtteri',
          lastName: 'Bottas',
          permanentNumber: '77',
          code: 'BOT',
          birthday: new Date('1989-08-28'),
          picture: '/assets/drivers/valtteri_bottas.webp',
          country: 'Finland',
          countryCode: 'FI',
          wins: '0',
          points: 12.0,
          penaltyPoints: 5,
        },
        {
          id: 2,
          team_id: 1,
          firstName: 'Guanyu',
          lastName: 'Zhou',
          permanentNumber: '24',
          code: 'ZHO',
          birthday: new Date('1999-05-30'),
          picture: '/assets/drivers/guanyu_zhou.webp',
          country: 'China',
          countryCode: 'CN',
          wins: '0',
          points: 1.0,
          penaltyPoints: 1,
        },
      ],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
