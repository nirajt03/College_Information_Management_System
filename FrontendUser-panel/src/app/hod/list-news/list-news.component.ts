import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodServiceService} from '../hod-service.service'

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  announcements = []

  constructor(
    private router: Router,
    private hodServiceService : HodServiceService ) { }

  ngOnInit(): void {
    this.loadAnnouncements()
  }

  loadAnnouncements() {
    this.hodServiceService
      .getAnnouncements()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.announcements = response['data']
          console.log(this.announcements)
        } else {
          console.log(response['error'])
        }
      })
  }


  onEdit(announcement) {
    this.router.navigate(['/hodHome/hod/add-news'], {queryParams: {id: announcement['id']}})
  }

  addAnnouncement() {
    this.router.navigate(['/hodHome/hod/add-news'])
  }

}
