import { Injectable } from '@angular/core';
import {Item} from "../models/Item";

@Injectable()
export class ItemService {

  constructor() { }

  getItems():Array<Item>
  {

    return [
      {
        id:1,
        name:'PGE ARENA',
        description: 'concerts, basketball matches'
      },
      {
        id:2,
        name:'Stadion Narodowy',
        description: 'football matches, concerts, international fair'
      },
      {
        id:3,
        name:'Katowicki spodek',
        description: 'concerts, icerink'
      },
      {
        id:4,
        name:'Pałac kultury w DG',
        description: 'teatr, kabarek, wystawy'
      }
    ]
  }

}
