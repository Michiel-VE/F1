import { Driver } from './driver';

export interface Team {
  id: number;
  name: string;
  origin: string;
  picture: string;
  drivers: Driver[];
}
