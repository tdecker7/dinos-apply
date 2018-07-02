import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Listing } from '../Listing';
import { LISTINGS } from '../assets/listings';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {


  constructor() { }

  getListings(): Observable<Listing[]> {
    return of(LISTINGS); 
  } 
}
