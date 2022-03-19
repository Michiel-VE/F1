import { animate, query, style, transition, trigger } from '@angular/animations';


export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ], { optional: true }),
      query(':enter', [
        animate('700ms ease', style({
            opacity: 1,
            transform: 'translateY(0)',
          }),
        ),
      ], { optional: true }),
    ]),
  ]);
