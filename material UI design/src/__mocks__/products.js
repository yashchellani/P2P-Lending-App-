import { v4 as uuid } from 'uuid';

//this is for lenders
//first item is a template that can be used for the other items in the products list. 
export const products = [
  {
    id: uuid(),
    name: 'Tommy Shelbae',
    maxAmount: 5000,
    ir: 5.0,
    maxPeriod: 18,
  },
  {
    id: uuid(),
    name: 'James Bind',
    maxAmount: 15000,
    ir: 15.0,
    maxPeriod: 12,
  },
  {
    id: uuid(),
    name: 'Al Bino',
    maxAmount: 500,
    ir: 1.0,
    maxPeriod: 12,
  },
  {
    id: uuid(),
    name: 'Tom Boat',
    maxAmount: 150000,
    ir: 20.0,
    maxPeriod: 48,
  },
  {
    id: uuid(),
    name: 'Jim Schrute',
    maxAmount: 15000,
    ir: 45.0,
    maxPeriod: 2,
  },
  {
    id: uuid(),
    name: 'Michael Scarn',
    maxAmount: 850,
    ir: 5.0,
    maxPeriod: 24,
  },
  {
    id: uuid(),
    name: 'Bruce Vein',
    maxAmount: 75000,
    ir: 10.0,
    maxPeriod: 36,
  },
  {
    id: uuid(),
    name: 'Elbert Anstein',
    maxAmount: 50,
    ir: 25.0,
    maxPeriod: 18,
  },
  {
    id: uuid(),
    name: 'Patrick',
    maxAmount: 50000000,
    ir: 5.0,
    maxPeriod: 12,
  }
];
