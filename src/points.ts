export interface MyPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  color: string;
}

export const points: MyPoint[] = [
  {
    id: '1',
    name: 'Point 1',
    lat: 51.505,
    lng: -0.09,
    description: 'This is point 1',
    color: 'red',
  },
  {
    id: '2',
    name: 'Point 2',
    lat: 51.51,
    lng: -0.1,
    description: 'This is point 2',
    color: 'blue',
  },
  {
    id: '3',
    name: 'Point 3',
    lat: 51.495,
    lng: -0.1,
    description: 'This is point 3',
    color: 'green',
  },
  {
    id: '4',
    name: 'Point 4',
    lat: 51.495,
    lng: -0.09,
    description: 'This is point 4',
    color: 'yellow',
  },
];
