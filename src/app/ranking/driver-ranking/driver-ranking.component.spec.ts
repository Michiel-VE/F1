import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPipe } from '../../shared/special.pipe';
import { DriverRankingComponent } from './driver-ranking.component';

describe('DriverRankingComponent', () => {
  let component: DriverRankingComponent;
  let fixture: ComponentFixture<DriverRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverRankingComponent, SpecialPipe],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRankingComponent);

    component = fixture.componentInstance;
    component.ranking = {
      positionText: 1,
      Driver: {
        givenName: 'Valtteri',
        familyName: 'Bottas',
        code: 'BOT',
        permanentNumber: '77',
      },
      points: 320,
      wins: 2,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
