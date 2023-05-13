import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodService } from '../hod.service';

@Component({
  selector: 'app-hod-list',
  templateUrl: './hod-list.component.html',
  styleUrls: ['./hod-list.component.css']
})
export class HodListComponent implements OnInit {
  hods = []

  constructor(
    private router: Router,
    private hodService: HodService) { }

  ngOnInit(): void {
    this.loadHods()
  }

  loadHods() {
    this.hodService
      .getHods()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.hods = response['data']
          console.log(this.hods)
        } else {
          console.log(response['error'])
        }
      })
  }

  toggleActiveStatus(hod) {
    this.hodService
      .toggleActivateStatus(hod)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadHods()
        } else {
          console.log(response['error'])
        }
      })
  }


}
