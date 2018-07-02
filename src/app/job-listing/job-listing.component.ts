import { Component, OnInit } from '@angular/core';

import { Listing } from '../../Listing';
import { ApplyService } from '../apply.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  listings: Listing[];

  constructor( private applyService: ApplyService) { }

  ngOnInit() {
    this.getListings();
  }

  getListings(): void {
    this.applyService.getListings()
      .subscribe(listings => this.listings = listings)
  }
  
}
