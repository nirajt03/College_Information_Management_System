import { Component, OnInit } from '@angular/core';
import { HodListServiceService } from '../hod-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hod',
  templateUrl: './list-hod.component.html',
  styleUrls: ['./list-hod.component.css']
})
export class ListHodComponent implements OnInit {

  hodlist = []

  constructor( private router: Router,
    private HodListServiceService: HodListServiceService) { }

  ngOnInit(): void {
    this.loadHodList()
  }

  loadHodList() {
    this.HodListServiceService
      .getHodList()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.hodlist = response['data']
          console.log(this.hodlist)
        } else {
          console.log(response['error'])
        }
      })
  }

  updateStatus(hod) {
    this.HodListServiceService
      .updateState(hod)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadHodList()
        } else {
          console.log(response['error'])
        }
      })
  }

}
